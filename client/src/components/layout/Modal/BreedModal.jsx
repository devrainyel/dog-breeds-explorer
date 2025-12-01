import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const BreedModal = ({ setShowModal, breed }) => {
  const imageUrl =
    breed.image?.url ||
    (breed.reference_image_id
      ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
      : null);

  return (
    <div className="fixed inset-0 bg-opacity-90 backdrop-blur-sm flex-center">
      <div className="relative bg-amber-100 w-full max-w-2xl p-4 rounded-lg">
        <h2 className="text-4xl font-bold text-blue-950">{breed.name}</h2>
        <div className="flex flex-col items-center md:p-5">
          {imageUrl && (
            <img
              src={imageUrl}
              className="rounded-lg max-h-64 object-cover shadow-md"
              alt={`Photo of ${breed.name}`}
            />
          )}
          <div className="mt-5 space-y-2 max-w-sm text-start">
            {breed.origin && (
              <p>
                <b>Origin:</b> {breed.origin}
              </p>
            )}
            <p>
              <b>Breed Group:</b> {breed.breed_group}
            </p>
            <p>
              <b>Height:</b> {breed.height.imperial}
            </p>
            <p>
              <b>Weight:</b> {breed.weight.imperial}
            </p>
            <p>
              <b>Life Span:</b> {breed.life_span}
            </p>
            <p>
              <b>Temperament:</b> <i>{breed.temperament}</i>
            </p>
          </div>
          <Link
            to={`/breed/${breed.id}`}
            onClick={() => setShowModal(false)}
            className="text-sm rounded-full bg-amber-400 py-2 px-5 mt-5"
          >
            More Details
          </Link>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 hover:scale-125"
        >
          <X size={30} />
        </button>
      </div>
    </div>
  );
};

export default BreedModal;
