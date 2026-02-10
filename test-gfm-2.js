
// test-gfm-2.js
async function check() {
    try {
        const res = await fetch('https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals');
        console.log('Status:', res.status);
        if (res.status === 200) {
            const text = await res.text();
            console.log('Length:', text.length);
            // Check for some known GFM data structures or just verify we got HTML
            if (text.includes('<!DOCTYPE html>')) {
                console.log('Got HTML');
            } else {
                console.log('Got something else');
            }
        }
    } catch (e) {
        console.error('Fetch error:', e);
    }
}

check();
