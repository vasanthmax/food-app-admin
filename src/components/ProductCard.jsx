import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { X, Edit } from "react-feather";
import { DeleteModal } from "./index";
const ProductCard = ({ description }) => {
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);
  // const [tooltip, setToolTip] = useState(false);
  // const data1 = [
  //   { name: "one" },
  //   { name: "two" },
  //   { name: "three" },
  //   { name: "four" },
  // ];
  // const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="mb-8 shadow-lg w-full rounded-lg overflow-x-hidden">
      <div className={`relative`}>
        <img
          src="https://unsplash.com/photos/G5w8OSzHDhI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8Y2hhcGF0aXx8MHx8fHwxNjM3NjA2NDMw&force=true"
          alt=""
          className={`h-40 w-full rounded-t-lg object-cover`}
        />
        <div
          className={`absolute h-40 w-full top-0 left-0 bg-purple-400 bg-opacity-0 cursor-pointer`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onTouchStart={() => setHover(true)}
        >
          {hover ? (
            <div>
              <div className="absolute h-10 w-10 bg-gray-600 top-2 opacity-80 rounded-lg right-1 hover:text-white hover:bg-purple-400 hover:opacity-100 cursor-pointer flex align-middle justify-center items-center">
                <X onClick={() => setModal(true)} />
              </div>
              <div className="absolute h-10 w-10 bg-gray-600 top-2 opacity-80 rounded-lg right-12 hover:text-white hover:bg-purple-400 hover:opacity-100 cursor-pointer flex align-middle justify-center items-center">
                <Edit />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center align-middle justify-between px-3 flex-wrap">
        <h1 className="font-bold text-2xl text-gray-700 flex-wrap">
          Chapati and Kuruma
        </h1>
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
      <div className="text-gray-300 text-xs px-3 mb-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          non iure voluptas laborum ab necessitatibus
        </p>
      </div>

      <DeleteModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default ProductCard;
