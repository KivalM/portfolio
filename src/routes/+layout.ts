import posthog from 'posthog-js';
import { browser } from '$app/environment';
const POSTHOG_KEY = 'phc_g0OZwav4mw2OYB4E1l9lXkld1pHWuGdzsG7iTtv8yPL';

export const load = async () => {
    if (browser) {
        posthog.init(POSTHOG_KEY, {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only'
        });
    }
    return;
};