import React from "react";

const TopMovie = ({ movie }) => {
  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  const getPoster = path => `${TMDB_IMAGE_BASE_URL}/original${path}`;

  const { backdrop_path, original_title } = movie;
  return (
    <div className="bg-white  border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <img
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src={{ uri: getPoster(backdrop_path) }}
        alt=""
      />
      <div className="flex flex-col items-center my-1 space-y-2">
        <h1 className="text-gray-600 poppins text-lg font-bold">
          {original_title}
        </h1>
        <p className="text-gray-500 poppins text-sm text-center"></p>
        <h2 className="text-gray-900 poppins text-2xl "></h2>
      </div>
    </div>
  );
};

export default TopMovie;
