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
import Spinner from "./components/Spinner";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.news.articles);
  const dataStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    if(dataStatus === 'idel') {
      dispatch(fetchArticles());
    }
  }, []);

  if (dataStatus === 'loading') {
    return <Spinner />
  } else if (dataStatus === 'succeeded') {
    const content = data;
  } else if (data === 'failed') {
    console.log(error);
  }

  return (
    <>
      <Navbar />
      <Catalogue />
      {articles.length !== 0 ? (
        <NewsList articles={articles} dataStatus={dataStatus} />
      ) : (
        <NewsList articles={topNews} dataStatus={dataStatus} />
      )}
      <Carousel />
      <Newesletter />
      <Features />
      <Footer />
    </>
  );
}
