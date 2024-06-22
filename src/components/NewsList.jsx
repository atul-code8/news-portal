import React, {useState} from "react";
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import Carousel from "./Carousel";

const NewsList = ({ articles, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

      // Get current items
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
    
      // Change page
      const paginate = pageNumber => setCurrentPage(pageNumber);

  if(loading) {
    return <Spinner />
  }
  return (
    <div className="container grid sm:grid-cols-1 xl:grid-cols-3 p-6">
    <div className="grid grid-cols-1 gap-4 col-span-2">
      {articles && currentItems.map((article) => <NewsItem article={article}  key={article.id}/>)}
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={articles.length}
        paginate={paginate}/>
    </div>
    <div className="col-span-1 space-y-8 mx-auto">
      <h2 className="text-xl font-semibold">Trending News</h2>
      {
        articles.video && articles.map(article => (

      <div className="w-80 rounded shadow-md overflow-hidden">
        <img src={article.image}/>
        <p className="hidden hover:block">{article.title}</p>
        <em className="hidden hover:block">{article.author}</em>
      </div>
        ))
      }
      <div>
      <div className="w-full h-[296px] bg-image shadow-md overflow-hidden relative p-4 cursor-pointer">
        <p className="text-lg text-gray-200 font-sans absolute bottom-2">Twenty nine areas around Whitehouse Station, NJ, which was the epicenter of the quake, have since reported rumbles.</p>
      </div>
      <div className="mt-4 flex space-x-2 text-sm">
        <img src="https://nypost.com/wp-content/uploads/sites/2/2024/04/79582612.jpg?quality=75&strip=all&w=1200" alt="Nearly 30 aftershocks recorded around NJ quake epicenter since Friday" className="w-32"/>
        <div>
        <p className="font-semibold">Nearly 30 aftershocks recorded around NJ quake epicenter since Friday</p>
        <em>writter</em>
        </div>
      </div>
      <div className="mt-4 flex space-x-2 text-sm">
        <img src="https://nypost.com/wp-content/uploads/sites/2/2024/04/79582612.jpg?quality=75&strip=all&w=1200" alt="Nearly 30 aftershocks recorded around NJ quake epicenter since Friday" className="w-32"/>
        <p className="font-semibold">Nearly 30 aftershocks recorded around NJ quake epicenter since Friday</p>
      </div>
      <div className="mt-4 flex space-x-2 text-sm">
        <img src="https://nypost.com/wp-content/uploads/sites/2/2024/04/79582612.jpg?quality=75&strip=all&w=1200" alt="Nearly 30 aftershocks recorded around NJ quake epicenter since Friday" className="w-32"/>
        <p className="font-semibold">Nearly 30 aftershocks recorded around NJ quake epicenter since Friday</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default NewsList;
