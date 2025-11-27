   import { fetchBreeds } from '../services/dogApiClient.js';

   export const listBreeds = async (req, res, next) => {
     try {
       const breeds = await fetchBreeds();
       res.json(breeds);
     } catch (err) {
       next(err);
     }
   }

   