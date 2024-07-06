import { Link } from "react-router-dom";

const NewsItem = ({ article }) => {
  return (
    <div className="mx-auto rounded-lg overflow-hidden shadow-lg  sm:w-[554px] w-[280px]">
      <div className="border-b">
        <Link to={`/article/all/${article.id}`}>
        <img
          src={article.image}
          alt="image not found!"
          className="w-full sm:h-[313px] h-[176px] object-cover object-center hover:opacity-70 transition"
        />
        </Link>
      </div>
      <div className="p-4">
        <p className="text-wrap mb-2 font-medium">{article.title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
