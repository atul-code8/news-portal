import { useGetCategoryQuery } from "../redux/features/newsSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { topNews } from "../api";
import Spinner from "./Spinner";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const NewsDetail = () => {
  const [name, setName] = useState([]);
  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoryQuery(name);

  const param = useParams();
  useEffect(() => {
    setName(param.category);
  }, [param.id]);

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  } else if (isSuccess) {
    console.log("Success...");
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }

  const article = topNews.find((state) => state.id == param.id);
  const categoryArticle =
    isSuccess &&
    news.articles.find((state) => {
      const dateString = state.publishedAt;
      const dateObject = new Date(dateString);
      const timestamp = dateObject.getTime();
      return timestamp == param.id;
    });

  return (
    <>
      {categoryArticle ? (
        <div className="w-[750px] mx-auto p-8">
          <div className=" mb-4">
            <img
              src={categoryArticle.urlToImage}
              alt={categoryArticle.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h2 className="text-2xl font-semibold font-sans">{categoryArticle.title}</h2>
          <p className="font-medium my-2">{categoryArticle.content}</p>
          <p className="font-medium">Summary: {categoryArticle.description}</p>
          <p className="flex gap-x-2"><GlobeAltIcon  width={18} color="blue"/> { categoryArticle.author}</p>
          <em className="mt-1">{categoryArticle.source.name}</em>
        </div>
      ) : (<Spinner />)}
    </>
  );
};

export default NewsDetail;
