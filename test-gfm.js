
import { fetch } from 'undici';

async function check() {
    try {
        const res = await fetch('https://www.gofundme.com/f/help-san-antonios-top-cyber-team-get-to-nationals');
        console.log('Status:', res.status);
        const text = await res.text();
        console.log('Length:', text.length);
        console.log('Contains "donors":', text.includes('donors'));
    } catch (e) {
        console.error(e);
    }
}

check();
