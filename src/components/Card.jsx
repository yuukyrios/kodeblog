import React, { useState } from 'react';

const Card = ({ title, date, img, content }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg">
      <img src={img} alt="Blog" className="w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p className="text-sm my-2 overflow-y-scroll max-h-20">{content}</p>
        <div className="flex items-center space-x-4">
          {/* Image beside the "See More" button */}

          <button
            onClick={handleModal}
            className=" text-blue-500 font-bold px-4 py-2 rounded-full outline-blue-500 outline-2 px-10 hover:text-white hover:bg-blue-500 transition-all hover:outline-0"
          >
            See More
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center ">
          <div className="bg-white p-8 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row rounded-lg">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img src={img} alt="Blog" className="w-full h-full rounded full object-cover " />
            </div>
            <div className="w-full md:w-1/2 pl-6">
              <h2 className="text-2xl font-semibold ">{title}</h2>
              <p className="my-4 overflow-y-scroll max-h-40">{content}</p>
              <button
                onClick={handleModal}
                className=" text-red-500 font-bold px-10 py-2 rounded-full outline-red-500 outline-2 px-10 hover:text-white hover:bg-red-500 transition-all hover:outline-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
