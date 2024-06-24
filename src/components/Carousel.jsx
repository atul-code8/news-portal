import React, { useRef, useEffect, } from "react";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../redux/features/wnewsSlice";


const Carousel = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.articles);
  const dataStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    if(dataStatus === 'idel') {
      dispatch(fetchArticles());
    }
  }, []);

  if (dataStatus === 'loading') {
    return <Spinner />
  } else if (dataStatus === 'succeeded') {
    const content = data;
  } else if (data === 'failed') {
    console.log(error);
  }
  const scrollRef = useRef(null);

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
          {dataStatus === "succeeded" &&
            data.news.map(
              (data, index) =>
                data.image && (
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
