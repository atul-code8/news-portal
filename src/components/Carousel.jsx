import { useRef } from "react";

const Carousel = ({articles}) => {
  const scrollRef = useRef(null);
  const length = articles?.top_news.length - 1;
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
      <div className="flex-1 flex flex-row max-w-[90%] mx-auto relative">
        <div
          className="flex flex-row w-max overflow-x-scroll scroll"
          ref={scrollRef}
        >
          {articles?.top_news[length].news.map(
            (data, index) =>
              data.image && (
                <div
                  className="bg-black relative min-w-80 h-[276px] sm:h-[447px] mr-8 cursor-pointer"
                  key={`gallery_image-${index + 1}`}
                >
                  <img
                    src={data.image}
                    alt="gallery"
                    className="w-full h-full absolute object-cover opacity-100 transition hover:opacity-55"
                  />
                  <p className="w-full h-full text-white text-xl p-4 -z-100 hover:z-10">{data.title}</p>
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
