
const https = require('https');
const fs = require('fs');

function dump() {
    https.get('https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals', (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            console.log('Data received, length:', data.length);
            fs.writeFileSync('gfm.html', data);

            // Try to find initial state
            const match = data.match(/window\.initialState\s*=\s*({.*?});/);
            if (match) {
                console.log('Found initial state!');
                fs.writeFileSync('initialState.json', match[1]);
            } else {
                console.log('No initial state found in simple regex.');
            }
        });
    }).on('error', (e) => {
        console.error(e);
    });
}

dump();
