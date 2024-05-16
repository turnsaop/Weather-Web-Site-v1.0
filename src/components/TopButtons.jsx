import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Шымкент",
    },
    {
      id: 2,
      name: "Караганды",
    },
    {
      id: 3,
      name: "Тараз",
    },
    {
      id: 4,
      name: "Астана",
    },
    {
      id: 5,
      name: "Актау",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
