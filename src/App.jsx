import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import { topNews } from "./api";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";
import Newesletter from "./components/Newsletter";
import Features from "./components/Features";
import Carousel from "./components/Carousel";
import { fetchArticles } from "./redux/features/wnewsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articles);
  const dataStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    console.log(dispatch(fetchArticles()));
  }, []);

  const apiKey = "849357abf6ef47b7882851cadc046486";

  // useEffect(() => {
  //   fetch(
  //     "https://api.worldnewsapi.com/search-news?source-countries=in",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-api-key": apiKey,
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       setLoading(true);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setArticles(data.news);
  //       setLoading(false);
  //     })
  //     .catch((error) =>
  //       console.error("There was a problem with the fetch operation:", error)
  //     );
  // }, []);

  return (
    <>
      <Navbar />
      <Catalogue />
      {articles.length !== 0 ? (
        <NewsList articles={articles} loading={loading} />
      ) : (
        <NewsList articles={topNews} loading={loading} />
      )}
      <Carousel />
      <Newesletter />
      <Features />
      <Footer />
    </>
  );
}
