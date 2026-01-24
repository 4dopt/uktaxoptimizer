import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SERVICE_ACCOUNT_FILE = 'service_account.json';
const SITEMAP_FILE = '../public/sitemap.xml';

// Full paths
const serviceAccountPath = path.join(__dirname, '..', SERVICE_ACCOUNT_FILE);
const sitemapPath = path.join(__dirname, SITEMAP_FILE);

async function main() {
    // 1. Check for Service Account Key
    if (!fs.existsSync(serviceAccountPath)) {
        console.error('❌ Error: Service account file not found.');
        console.error(`   Please place your Google Cloud service account JSON file at: ${serviceAccountPath}`);
        console.error('   Make sure to rename it to "service_account.json".');
        process.exit(1);
    }

    // 2. Read and Parse Sitemap
    if (!fs.existsSync(sitemapPath)) {
        console.error(`❌ Error: Sitemap file not found at ${sitemapPath}`);
        console.error('   Run "npm run sitemap" or "npm run build" first.');
        process.exit(1);
    }

    console.log('Reading sitemap...');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

    // Simple regex to extract URLs from sitemap
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls = [];

    while ((match = urlRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
    }

    if (urls.length === 0) {
        console.warn('⚠️ No URLs found in sitemap.');
        process.exit(0);
    }

    console.log(`Found ${urls.length} URLs to index.`);

    // 3. Authenticate with Google
    console.log('Authenticating...');

    const auth = new google.auth.GoogleAuth({
        keyFile: serviceAccountPath,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();

    // 4. Send Indexing Requests
    console.log('Sending indexing requests...');

    let successCount = 0;
    let failCount = 0;

    for (const url of urls) {
        try {
            const res = await client.request({
                url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                method: 'POST',
                data: {
                    url: url,
                    type: 'URL_UPDATED'
                }
            });

            if (res.status === 200) {
                console.log(`✅ [OK] ${url}`);
                successCount++;
            } else {
                console.error(`❌ [${res.status}] ${url} - ${res.statusText}`);
                failCount++;
            }

        } catch (error) {
            console.error(`❌ [ERR] ${url} - ${error.message}`);
            // Common error: 403 Forbidden -> User permissions
            if (error.code === 403) {
                console.error('   -> Hint: Make sure the service account email is added as an Owner in Google Search Console.');
            }
            failCount++;
        }
    }

    console.log('\n-----------------------------------');
    console.log(`Indexing Complete.`);
    console.log(`Success: ${successCount}`);
    console.log(`Failed:  ${failCount}`);

    if (successCount === 0 && failCount > 0) {
        console.log('\n⚠️ All requests failed. Please check your Service Account permissions in Google Search Console.');
    }
}

main();
