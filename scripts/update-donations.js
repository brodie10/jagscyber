
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';

const GFM_URL = 'https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals';
const DATA_FILE = './src/data/donations.json';

async function updateDonations() {
    console.log('Fetching GoFundMe page...');
    try {
        const res = await fetch(GFM_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const html = await res.text();
        console.log(`Fetched ${html.length} bytes. Parsing...`);

        const dom = new JSDOM(html);
        const doc = dom.window.document;

        // 1. Extract Goal & Current Amount
        // Attempt to match the specific "raised of" pattern more robustly
        // The HTML shows: $350 raised of 1.8K
        // We want to be careful.

        let currentAmount = '0';
        let goalAmount = '10000'; // Default to user request if parsing fails or seems wrong

        // Find the progress meter element
        const progressMeter = doc.querySelector('.progress-meter_progressMeter__BYOlt');
        if (progressMeter) {
            const text = progressMeter.textContent;
            console.log('Progress Meter Text:', text);

            // Regex to find amounts
            // $350 raised of 1.8K
            const raisedMatch = text.match(/\$([\d,.]+)[^\d]*raised/i);
            if (raisedMatch) currentAmount = raisedMatch[1];

            const goalMatch = text.match(/of\s*([\d,.]+[KMG]?)/i);
            if (goalMatch) {
                let rawGoal = goalMatch[1];
                // Convert K to thousands
                if (rawGoal.endsWith('K')) {
                    goalAmount = parseFloat(rawGoal.replace('K', '')) * 1000;
                } else {
                    goalAmount = rawGoal;
                }
            }
        }

        // 2. Extract Donors from the "Latest Donations" list
        // Look for list items or divs that look like donors
        const donors = [];
        const donorElements = doc.querySelectorAll('.m-donation-list-item, .hrt-avatar-lockup');

        // The previous selector .hrt-avatar-lockup might be generic for any avatar. 
        // Let's look for specific donor attributes if possible.
        // In GFM, donors usually appear in a list.

        console.log(`Found ${donorElements.length} potential donor elements.`);

        donorElements.forEach(el => {
            // We only want ones that have a name and amount
            // Exclude the "Organizer" or "Team" if they share the same class

            const nameEl = el.querySelector('.hrt-link--gray-dark') || el.querySelector('strong') || el.querySelector('.hrt-font-bold');
            if (!nameEl) return;

            const name = nameEl.textContent.trim();
            // Ignore organizer "Daniel Crinion" if in valid donor list? 
            // Actually organizer could donate. But usually they are separate.

            // Amount logic
            // GFM sometimes hides amount for anonymous.
            // Look for text that starts with $
            // But the text content of the whole element might verify it.

            // Let's try to find an explicit amount element if possible.
            // It's often just text nodes mixed in.

            // Let's look at the element text content.
            const text = el.textContent;
            const amountMatch = text.match(/\$([\d,]+)/);

            if (amountMatch) {
                donors.push({
                    name: name,
                    amount: amountMatch[0],
                    date: 'Recent' // We don't have easy date parsing from just text usually
                });
            }
        });

        // Remove duplicates
        const uniqueDonors = donors.filter((d, index, self) =>
            index === self.findIndex((t) => (
                t.name === d.name && t.amount === d.amount
            ))
        );

        console.log(`Extracted ${uniqueDonors.length} unique donors.`);

        const data = {
            collected: currentAmount,
            goal: goalAmount,
            donors: uniqueDonors,
            lastUpdated: new Date().toISOString()
        };

        await fs.mkdir('./src/data', { recursive: true });
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
        console.log(`Saved to ${DATA_FILE}`);

    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

updateDonations();
