
const fs = require('fs');

async function dump() {
    try {
        const res = await fetch('https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals');
        const text = await res.text();
        // Look for JSON data embedded in scripts
        // Common patterns: window.initialState =, var campaign = 
        const scripts = text.match(/<script>.*?<\/script>/gs);
        if (scripts) {
            console.log('Found scripts:', scripts.length);
            // fs.writeFileSync('scripts.txt', scripts.join('\n'));
        }

        // Look for specific data
        const match = text.match(/window\.initialState\s*=\s*({.*?});/);
        if (match) {
            console.log('Found initial state!');
            fs.writeFileSync('initialState.json', match[1]);
        } else {
            console.log('No initial state found. Dumping full HTML to inspect.');
            fs.writeFileSync('gfm.html', text);
        }
    } catch (e) {
        console.error(e);
    }
}

dump();
