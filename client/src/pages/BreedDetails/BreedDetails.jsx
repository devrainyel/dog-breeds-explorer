import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BreedDetails = () => {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const [dogFact, setDogFact] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch("/api/breeds");

        if (!res.ok) {
          throw new Error(
            `Failed to fetch breeds. Status: ${res.status} ${res.statusText}`
          );
        }

        const breeds = await res.json();
        const foundBreed = breeds.find((b) => b.id === parseInt(id));

        if (!foundBreed) {
          throw new Error("Breed not found");
        }
        
        setBreed(foundBreed);
      } catch (err) {
        console.error("Error fetching breed:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBreed();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-700">Loading breed details...</div>
      </div>
    );
  }

  if (error || !breed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl text-red-600 mb-4">
          {error || "Breed not found"}
        </div>
        <Link to="/" className="text-amber-600 hover:text-amber-700 underline">
          Go back to home
        </Link>
      </div>
    );
  }

  const imageUrl =
    breed.image?.url ||
    (breed.reference_image_id
      ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
      : null);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-5">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Breed Details Card */}
        <div className="space-y-5">
          <h1 className="text-5xl font-bold text-blue-950 mb-6">
            {breed.name}
          </h1>

          <div className="flex flex-col pb-20">
            {/* Image Section */}
            {imageUrl && (
              <div className="flex justify-center">
                <img
                  src={imageUrl}
                  alt={`Photo of ${breed.name}`}
                  className="rounded-md w-full object-contain border-3 border-amber-600"
                />
              </div>
            )}

            {/* Breed Profile Section */}
            <div className="space-y-5 mt-5">
              <h1 className="text-4xl font-black text-blue-950">
                Breed Profile
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {breed.origin && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Origin
                    </h3>
                    <p className="text-gray-700">{breed.origin}</p>
                  </div>
                )}

                {breed.breed_group && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Breed Group
                    </h3>
                    <p className="text-gray-700">{breed.breed_group}</p>
                  </div>
                )}

                {breed.height && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Height
                    </h3>
                    <p className="text-gray-700">
                      {breed.height.imperial} (imperial) / {breed.height.metric}{" "}
                      (metric)
                    </p>
                  </div>
                )}

                {breed.weight && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Weight
                    </h3>
                    <p className="text-gray-700">
                      {breed.weight.imperial} (imperial) / {breed.weight.metric}{" "}
                      (metric)
                    </p>
                  </div>
                )}

                {breed.life_span && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Life Span
                    </h3>
                    <p className="text-gray-700">{breed.life_span}</p>
                  </div>
                )}

                {breed.temperament && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Temperament
                    </h3>
                    <p className="text-gray-700 italic">{breed.temperament}</p>
                  </div>
                )}

                {breed.bred_for && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-950">
                      Bred For
                    </h3>
                    <p className="text-gray-700">{breed.bred_for}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Facts Section */}
            <div className="mt-5">
              <h1 className="text-5xl font-black text-blue-950">Facts</h1>
            </div>
          </div>

          {/* Description Section */}
          {breed.description && (
            <div className="mt-8 pt-6 border-t border-amber-300">
              <h3 className="text-xl font-semibold text-blue-950 mb-3">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {breed.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreedDetails;
