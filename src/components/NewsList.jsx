import React, { useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Carousel from "./Carousel";

const NewsList = ({ articles, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const allNews = articles?.top_news.map((state) => state.news);
  const news = allNews.flat();

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container grid sm:grid-cols-1 xl:grid-cols-3 p-6">
      <div className="grid grid-cols-1 gap-4 col-span-2 mb-10">
        {articles &&
          currentItems.map((article) => (
            <NewsItem article={article} key={article.id} />
          ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={news.length}
          paginate={paginate}
        />
      </div>
      <div className="col-span-1 space-y-8 mx-auto">
        <h2 className="text-xl font-semibold">Trending News</h2>
        <div className="grid grid-cols-1">
          <div className="w-[90%] h-[276px] mx-auto bg-image shadow-md overflow-hidden relative p-4 cursor-pointer mb-4">
            <p className="text-lg text-gray-200 font-sans absolute bottom-2">
              Twenty nine areas around Whitehouse Station, NJ, which was the
              epicenter of the quake, have since reported rumbles.
            </p>
          </div>
          <Carousel articles={articles}/>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
