const tools = require("./src/_data/tools.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });

  // src/_shells/*.njk are reference templates only — the n8n pipeline
  // fetches them raw via the GitHub API and does its own token-replacement.
  // They are NOT meant to be built into real pages (they have no real
  // "slug" etc. at build time), so tell Eleventy to skip them entirely.
  eleventyConfig.ignores.add("src/_shells/**");

  // ---- EMOJI FALLBACK ----
  // If a tool has no icon, use the first letter of its title instead.
  eleventyConfig.addFilter("iconFor", function (item) {
    if (item && item.icon) return item.icon;
    return ((item && item.title) || "").trim().charAt(0).toUpperCase();
  });

  // ---- ADVERTISEMENTS-INNER-CODES ----
  // Give N ad codes -> they auto-spread through rendered HTML content:
  // 1st near the top, last near the end, rest spaced evenly between.
  // Works by splitting on paragraph boundaries (</p>) and inserting a
  // marker div before the paragraph at each computed index.
  eleventyConfig.addFilter("spreadInnerAds", function (html, adCodes) {
    if (!adCodes || !adCodes.length || !html) return html;
    const parts = html.split(/(<\/p>)/);
    const paras = [];
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i] !== undefined) paras.push(parts[i] + (parts[i + 1] || ""));
    }
    const n = adCodes.length;
    if (paras.length < n) return html;
    adCodes.forEach((code, i) => {
      const idx = Math.min(
        Math.round(((i + 1) * paras.length) / (n + 1)),
        paras.length - 1
      );
      const marker = `<div class="ads-inner-marker" data-ad="advertisements-inner-codes-${i + 1}">${code}</div>`;
      paras[idx] = marker + paras[idx];
    });
    return paras.join("");
  });

  // ---- CHUNK helper for building the tools grid with ad-slot cadence ----
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
