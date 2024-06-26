import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useGetNewsByIdQuery } from "../redux/features/wnewsSlice";
import Spinner from "./Spinner";

const NewsDetail = () => {
  const [name, setName] = useState([]);
  const { data, isLoading, isSuccess, isError, error } =
    useGetNewsByIdQuery(name);

  const param = useParams();
  useEffect(() => {
    setName(param.category);
  }, [param.id]);

  if (isLoading) {
    return <Spinner />;
  } else if (isSuccess) {
    console.log(data);
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <>
      <div className="w-[750px] mx-auto p-8">
        <div className=" mb-4">
          <img
            src={data.news.image}
            alt={data.news.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-semibold font-sans">{data.news.title}</h2>
        <p className="font-medium my-2">{data.news.text}</p>
        <p className="font-medium">Summary: {data.news.summary}</p>
        <p className="flex gap-x-2">
          <GlobeAltIcon width={18} color="blue" /> {data.news.authors}
        </p>
        <em className="mt-1">source</em>
      </div>
    </>
  );
};

export default NewsDetail;
