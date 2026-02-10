
import fs from 'fs/promises';

async function dump() {
    try {
        const res = await fetch('https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals');
        const text = await res.text();
        console.log('Length:', text.length);

        // Save full HTML
        await fs.writeFile('gfm.html', text);

        // Check for potential data blobs
        const stateMatch = text.match(/window\.initialState\s*=\s*({.*?});/);
        if (stateMatch) {
            console.log('Found initial state');
            await fs.writeFile('initialState.json', stateMatch[1]);
        } else {
            console.log('No initial state found match.');
        }

    } catch (e) {
        console.error(e);
    }
}

dump();
