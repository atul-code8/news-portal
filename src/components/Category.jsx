import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLazyGetNewsByNameQuery } from "../redux/features/wnewsSlice";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Newesletter from "./Newsletter";
import Features from "./Features";
import Footer from "./Footer";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [tirgger, { data, error }] = useLazyGetNewsByNameQuery();
  const param = useParams();

  useEffect(() => {
    setTimeout(() => {
      tirgger(param.category);
    }, 1000);
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.news.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (error) {
    return (
      <div className="h-screen grid place-items-center text-lg font-medium text-red-500">
        {JSON.stringify(error.data)}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Latest{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 capitalize">
            {param.category}{" "}
          </span>
          news
        </h2>
        {data ? (
          currentItems.map((article, index) => {
            return (
              <div key={index}>
                {article.urlToImage !== null && (
                  <div className="mx-auto rounded-lg overflow-hidden shadow-lg w-[554px]">
                    <div>
                      <Link to={`${article.id}`}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-[313px] object-cover object-center hover:opacity-70 transition"
                        />
                      </Link>
                    </div>
                    <div className="p-4">
                      <p className="text-wrap mb-2">{article.title}</p>
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://static.vecteezy.com/system/resources/previews/036/280/650/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                        alt="avtar"
                      />
                      <em className="font-medium ml-2">{article.author}</em>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data?.news.length}
          paginate={paginate}
        />
      </div>
      <Newesletter />
      <Features />
      <Footer />
    </>
  );
};

export default Category;
