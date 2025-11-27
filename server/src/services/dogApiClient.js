import fetch from "node-fetch";
import { config } from "../config/index.js";

export const fetchBreeds = async () => {
  const res = await fetch(`${config.dogApiBaseUrl}/breeds`, {
        headers: {'x-api-key': config.dogApiKey},
        });

        if (!res.ok) {
            throw new Error (`DogAPI error: ${res.status} `);
        }

        return res.json();
};
