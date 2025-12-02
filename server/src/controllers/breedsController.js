import { fetchBreeds } from '../services/dogApiClient.js';
import { dogFacts } from '../../data/dogFacts.js';

// ...existing code...
export const listBreeds = async (req, res, next) => {
  try {
    const breeds = await fetchBreeds();

    const factsByBreed = {};
    for (const entry of dogFacts) {
      const id = entry.breedId;
      if (!factsByBreed[id]) factsByBreed[id] = { facts: [], healthTips: [] };
      if (entry.facts) factsByBreed[id].facts.push(...entry.facts);
      if (entry.healthTips) factsByBreed[id].healthTips.push(...entry.healthTips);
    }

    const unique = (arr) => Array.from(new Set(arr));
    const enrichedBreeds = breeds.map((b) => {
      const entry = factsByBreed[b.id] || { facts: [], healthTips: [] };
      return {
        ...b,
        facts: unique(entry.facts),
        healthTips: unique(entry.healthTips),
      };
    });

    res.json(enrichedBreeds);
  } catch (err) {
    next(err);
  }
};