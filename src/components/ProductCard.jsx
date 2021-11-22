import React from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
const ProductCard = () => {
  const data1 = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "four" },
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="mb-8 shadow-lg w-full rounded-lg">
      <div className="relative">
        <img
          src="https://unsplash.com/photos/4_jhDO54BYg/download?force=true"
          alt=""
          className="h-40 w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex items-center align-middle justify-between px-3">
        <h1 className="font-bold text-2xl text-gray-700">Vegie</h1>
        <ReactStars
          edit={false}
          onChange={null}
          count={5}
          value={2.6}
          size={24}
          isHalf={true}
          emptyIcon={<FontAwesomeIcon icon={faStar} />}
          halfIcon={<FontAwesomeIcon icon={faStarHalf} />}
          fullIcon={<FontAwesomeIcon icon={faStar} />}
          activeColor="#ffd700"
        />
      </div>
      <div className="text-gray-300 text-xs px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          numquam maxime iste quisquam quia ab illum quos dignissimos corporis
        </p>
      </div>
      <div className="mt-2 flex px-3 pb-4 flex-wrap">
        {data1.map((data, i) => (
          <div
            style={{
              background: `${
                colors[Math.floor(Math.random() * colors.length)]
              }`,
            }}
            className="h-8 w-8 text-xs rounded-full flex align-middle items-center justify-center mb-2 mr-2"
          >
            {data.name.slice(0, 1)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
