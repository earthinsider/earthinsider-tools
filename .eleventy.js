const tools = require("./src/_data/tools.json");
const categories = require("./src/_data/categories.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.addPassthroughCopy({ "src/manifest.webmanifest": "manifest.webmanifest" });

  // src/_shells/*.njk and src/custom-tools/*.txt are reference/template files
  // only — never built into real pages.
  eleventyConfig.ignores.add("src/_shells/**");
  eleventyConfig.ignores.add("src/custom-tools/_TEMPLATE.njk.txt");

  // ---- EMOJI FALLBACK ----
  eleventyConfig.addFilter("iconFor", function (item) {
    if (item && item.icon) return item.icon;
    return ((item && item.title) || "").trim().charAt(0).toUpperCase();
  });

  // ---- ADVERTISEMENTS-INNER-CODES ----
  eleventyConfig.addFilter("spreadInnerAds", function (html, adCodes) {
    if (!adCodes || !adCodes.length || !html) return html;
    const parts = html.split(/(<\/p>)/);
    const paras = [];
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i] !== undefined) paras.push(parts[i] + (parts[i + 1] || ""));
    }
    const n = Math.min(adCodes.length, paras.length);
    if (n === 0) return html;
    for (let i = 0; i < n; i++) {
      const idx = Math.min(Math.round(((i + 1) * paras.length) / (n + 1)), paras.length - 1);
      const marker = `<div class="ads-inner-marker" data-ad="advertisements-inner-codes-${i + 1}">${adCodes[i]}</div>`;
      paras[idx] = marker + paras[idx];
    }
    return paras.join("");
  });

  // ---- CHUNK helper for building a tools grid with ad-slot cadence ----
  // mobile ad slot: after every 1 tool. desktop ad slot: after every 2.
  eleventyConfig.addFilter("withGridAdSlots", function (toolList) {
    const out = [];
    toolList.forEach((tool, i) => {
      const n = i + 1;
      out.push({ kind: "tool", tool });
      out.push({ kind: "ad-mobile", after: n });
      if (n % 2 === 0) out.push({ kind: "ad-desktop", after: `${n - 1}-${n}` });
    });
    return out;
  });

  // ---- CATEGORIES ----
  // Hybrid system: a tool's category comes from its own "category" field
  // (set explicitly by n8n or by hand for custom tools). This filter is a
  // safety net only, for any older entry that predates the category field.
  const typeToCategory = { "text-io": "text-tools", "image-io": "image-tools", "generator": "generators", "calculator": "calculators" };
  eleventyConfig.addFilter("categoryFor", function (tool) {
    if (!tool) return null;
    return tool.category || typeToCategory[tool.shellType] || null;
  });
  eleventyConfig.addFilter("categoryNameFor", function (slug) {
    const cat = categories.find((c) => c.slug === slug);
    return cat ? cat.name : slug;
  });
  eleventyConfig.addFilter("categoryForUrl", function (url) {
    const t = tools.find((x) => x.url === url);
    return t ? t.category : null;
  });
  eleventyConfig.addFilter("toolsByCategory", function (categorySlug) {
    return tools.filter((t) => t.type === "tool" && t.category === categorySlug);
  });

  // ---- RELATED TOOLS ---- (same category, excluding the current page)
  eleventyConfig.addFilter("relatedTools", function (currentUrl, limit) {
    const current = tools.find((t) => t.url === currentUrl);
    if (!current || !current.category) return [];
    return tools
      .filter((t) => t.type === "tool" && t.category === current.category && t.url !== currentUrl)
      .slice(0, limit || 4);
  });

  // ---- "NEW" BADGE ---- (added within the last 7 days)
  eleventyConfig.addFilter("isNew", function (dateStr) {
    if (!dateStr) return false;
    const diff = Date.now() - new Date(dateStr).getTime();
    return diff >= 0 && diff <= 7 * 24 * 60 * 60 * 1000;
  });

  eleventyConfig.addCollection("toolsList", () => tools.filter((t) => t.type === "tool"));
  eleventyConfig.addCollection("pagesList", () => tools.filter((t) => t.type === "page"));
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"],
  };
};
