import { Link } from "react-router-dom";

const NewsItem = ({ article }) => {
  return (
    <div className="mx-auto rounded-lg overflow-hidden shadow-lg  sm:w-[554px] w-[280px]">
      <div className="border-b">
        <Link to={`/article/all/${article.id}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full sm:h-[313px] h-[176px] object-cover object-center hover:opacity-70 transition"
        />
        </Link>
      </div>
      <div className="p-4">
        <p className="text-wrap mb-2">{article.title}</p>
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2"
          src="https://static.vecteezy.com/system/resources/previews/036/280/650/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
          alt="avtar"
        ></img>
        <em className="font-medium">{article.author}</em>
      </div>
    </div>
  );
};

export default NewsItem;
