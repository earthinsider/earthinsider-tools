const tools = require("./src/_data/tools.json");
const categories = require("./src/_data/categories.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.ignores.add("src/_shells/**");
  eleventyConfig.ignores.add("src/custom-tools/_TEMPLATE.njk.txt");

  eleventyConfig.addFilter("iconFor", i => i && i.icon ? i.icon : ((i && i.title)||"").trim().charAt(0).toUpperCase());
  eleventyConfig.addFilter("first", (arr, n) => (arr||[]).slice(0, n||3));

  // spreadInnerAds: injects ad markers between paragraphs.
  // IMPORTANT: template must use  {{ value | safe | spreadInnerAds(ads) | safe }}
  // so both the input HTML and the output are treated as safe (not escaped).
  eleventyConfig.addFilter("spreadInnerAds", function(html, adCodes) {
    const raw = (html && typeof html === "object" && html.val !== undefined) ? html.val : String(html || "");
    if (!adCodes || !adCodes.length || !raw) return raw;
    const parts = raw.split(/(<\/p>)/);
    const paras = [];
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i] !== undefined) paras.push(parts[i] + (parts[i + 1] || ""));
    }
    const n = Math.min(adCodes.length, paras.length);
    if (!n) return raw;
    for (let i = 0; i < n; i++) {
      const idx = Math.min(Math.round((i + 1) * paras.length / (n + 1)), paras.length - 1);
      paras[idx] = `<div class="ads-inner-marker" data-ad="inner-${i+1}">${adCodes[i]}</div>${paras[idx]}`;
    }
    return paras.join("");
  });

  eleventyConfig.addFilter("withGridAdSlots", list => {
    const out = [];
    (list || []).forEach((tool, i) => {
      const n = i + 1;
      out.push({ kind: "tool", tool });
      out.push({ kind: "ad-mobile", after: n });
      if (n % 2 === 0) out.push({ kind: "ad-desktop", after: `${n-1}-${n}` });
    });
    return out;
  });

  const typeToCategory = { "text-io": "text-tools", "image-io": "image-tools", "generator": "generators", "calculator": "calculators" };
  eleventyConfig.addFilter("categoryFor", t => t && (t.category || typeToCategory[t.shellType]) || null);
  eleventyConfig.addFilter("categoryNameFor", slug => { const c = categories.find(c => c.slug === slug); return c ? c.name : slug; });
  eleventyConfig.addFilter("categoryForUrl", url => { const t = tools.find(x => x.url === url); return t ? t.category : null; });
  eleventyConfig.addFilter("toolsByCategory", slug => tools.filter(t => t.type === "tool" && t.category === slug));
  eleventyConfig.addFilter("relatedTools", (url, limit) => {
    const cur = tools.find(t => t.url === url);
    if (!cur || !cur.category) return [];
    return tools.filter(t => t.type === "tool" && t.category === cur.category && t.url !== url).slice(0, limit || 4);
  });
  eleventyConfig.addFilter("isNew", d => {
    if (!d) return false;
    const diff = Date.now() - new Date(d).getTime();
    return diff >= 0 && diff <= 7 * 24 * 60 * 60 * 1000;
  });

  eleventyConfig.addCollection("toolsList", () => tools.filter(t => t.type === "tool"));
  eleventyConfig.addCollection("pagesList", () => tools.filter(t => t.type === "page"));
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"],
  };
};
                           
