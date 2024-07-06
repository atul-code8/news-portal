import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useGetNewsByIdQuery } from "../redux/features/wnewsSlice";
import Spinner from "./Spinner";

const NewsDetail = () => {
  const [name, setName] = useState('');
  const { data, isLoading, isError, error } =
    useGetNewsByIdQuery(name);

  const param = useParams();
  useEffect(() => {
    setName(param.id);
  }, [param.id]);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <div>{error.toString()}</div>;
  }

  return (
    <>
      <div className="p-10">
        <div className="mb-4">
          <img
            src={data?.news[0].image}
            alt={data?.news[0].title}
            className="w-2/3 mx-auto object-cover object-center"
          />
        </div>
        <h2 className="text-2xl font-semibold font-sans">{data?.news[0].title}</h2>
        <p className="tracking-wider text-sm my-4">{data?.news[0].text}</p>
        <p className="flex gap-x-2">
          <GlobeAltIcon width={18} color="blue" /> {data?.news[0].authors}
        </p>
        <em className="mt-1">{data?.news[0].publish_date}</em>
      </div>
    </>
  );
};

export default NewsDetail;
