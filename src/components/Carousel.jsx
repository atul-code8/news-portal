import React, { useRef } from "react";
import { useGetCategoryQuery } from "../redux/features/newsSlice";
import Spinner from "./Spinner";

const Carousel = ({data, dataStatus}) => {
  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoryQuery("general");

  const scrollRef = useRef(null);

  if (dataStatus === 'loading') {
    return <Spinner />;
  }
  if (isError) {
    return error.message;
  }
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="flex flex-row py-4">
      <div className="flex-1 flex flex-row max-w-[80%] mx-auto relative">
        <div
          className="flex flex-row w-max overflow-x-scroll scroll"
          ref={scrollRef}
        >
          {dataStatus === 'succeeded' &&
            data.news.map(
              (data, index) =>
                data.image  && (
                  <div
                    className="bg-black relative min-w-80 h-[447px] mr-8"
                    key={`gallery_image-${index + 1}`}
                  >
                    <img
                      src={data.image}
                      alt="gallery"
                      className="w-full h-full object-cover opacity-100 transition hover:opacity-55 cursor-pointer"
                    />
                  </div>
                )
            )}
        </div>
        <div className="w-full flex justify-between items-center px-4 absolute bottom-[5%]">
          <button
            className="px-3 text-[2rem] cursor-pointer bg-gray-800 text-white rounded text-center"
            onClick={() => scroll("left")}
          >
            ←
          </button>
          <button
            className="px-3 text-[2rem] cursor-pointer bg-gray-800 text-white rounded text-center"
            onClick={() => scroll("right")}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
