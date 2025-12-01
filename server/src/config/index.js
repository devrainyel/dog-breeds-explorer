import 'dotenv/config.js';

export const config = {
    dogApiKey: process.env.DOG_API_KEY,
    dogApiBaseUrl: process.env.DOG_API_BASE_URL ?? 'https://api.thedogapi.com/v1',
}