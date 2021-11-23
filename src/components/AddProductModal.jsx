import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { X } from "react-feather";

const AddProductModal = ({ modal, setAddModal }) => {
  const [inputList, setInputList] = useState([
    { name: "", gram: "", percentage: "" },
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", gram: "", percentage: "" }]);
  };
  return (
    <div
      className={`fixed left-0 top-0 z-40 h-screen w-full bg-gray-600 bg-opacity-50 md:px-40 ${
        modal ? "" : "hidden"
      }`}
    >
      <div
        className={`flex items-center justify-center h-screen px-4  text-center`}
      >
        <div className="h-3/4 w-full bg-white rounded-lg shadow-xl p-2 overflow-y-scroll">
          <div className="bg-white px-4 w-full">
            <div className="flex flex-col">
              <div className="flex items-center align-middle h-10 mb-4 justify-between">
                <h3 className="text-xl font-bold text-left">Add Product</h3>
                <X
                  onClick={() => setAddModal(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="mt-2 flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none md:w-min"
                />
              </div>

              <div className="lg:flex lg:flex-wrap space-x-1 w-full">
                <div className="mt-4 flex flex-col">
                  <input
                    type="text"
                    name="rating"
                    placeholder="Product Rating"
                    className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col">
                <textarea
                  type="text"
                  name="description"
                  placeholder="Product Desciption"
                  className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <label
                  className="
                        w-full
                        flex flex-col
                        items-center
                        px-4
                        py-6
                        bg-white
                        rounded-md
                        shadow-md
                        tracking-wide
                        uppercase
                        border border-blue
                        cursor-pointer
                        hover:bg-gray-200 hover:text-white
                        text-gray-200
                        ease-linear
                        transition-all
                        duration-150"
                >
                  <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" />
                  <span className="mt-2 text-base leading-normal">
                    Select a Image
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="mt-4 flex flex-col">
                <p className="text-gray-600 text-xl font-semibold mb-4 text-left">
                  Ingredients
                </p>
                {inputList.map((x, i) => {
                  return (
                    <div className="lg:flex lg:space-x-1 mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Ingredient name"
                        className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none w-full lg:w-min mb-2"
                        value={x.name}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                      <input
                        type="text"
                        name="gram"
                        placeholder="Gram"
                        className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none w-full lg:w-min mb-2"
                        value={x.gram}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                      <input
                        type="text"
                        name="percentage"
                        placeholder="Percentage"
                        className="px-3 bg-gray-200 py-2 rounded-lg focus:outline-none w-full lg:w-min mb-2"
                        value={x.percentage}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                      <div className="btn-box">
                        {inputList.length !== 1 && (
                          <button
                            className="px-5 py-2 rounded-lg text-white bg-red-500 mr-2"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove
                          </button>
                        )}
                        {inputList.length - 1 === i && (
                          <button
                            onClick={handleAddClick}
                            className="px-5 py-2 rounded-lg text-white bg-green-500"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center text-right justify-end px-4 mb-4">
            <button
              className="py-2 px-5 rounded-lg bg-purple-400 text-white cursor-pointer"
              onClick={() => setAddModal(false)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
