import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://uktax.gg'; // Replace with actual domain if known, or configure via env

const STATIC_ROUTES = [
    '/',
    '/calculators',
    '/privacy-policy',
    '/terms-of-service',
    '/contact',
    '/blog'
];

const BLOG_ROUTES = [
    '/blog/uk-60-percent-tax-trap-calculator-guide',
    '/blog/pension-bridge-calculator-guide',
    '/blog/adjusted-net-income-calculator-guide',
    '/blog/child-benefit-charge-calculator-guide',
    '/blog/salary-comparison-calculator-guide',
    '/blog/60k-tax-threshold-guide',
    '/blog/scottish-tax-calculator-guide'
];

const CALCULATOR_ROUTES = [
    '/60-percent-tax-trap-calculator',
    '/adjusted-net-income-calculator',
    '/child-benefit-charge-calculator',
    '/pension-bridge-calculator',
    '/salary-comparison-tool',
    '/rsu-tax-calculator-uk',
    '/scottish-income-tax-calculator'
];

const generateSitemap = () => {
    const allRoutes = [
        ...STATIC_ROUTES,
        ...BLOG_ROUTES,
        ...CALCULATOR_ROUTES
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, '../public');

    // Ensure public dir exists
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent);

    console.log(`✅ Sitemap generated at ${sitemapPath} with ${allRoutes.length} URLs`);
};

generateSitemap();
