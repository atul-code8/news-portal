import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";
import Newesletter from "./components/Newsletter";
import Features from "./components/Features";
import Spinner from "./components/Spinner";
import { useGetTopNewsQuery } from "./redux/features/wnewsSlice";

export default function App() {
  const { data, isLoading, isSuccess, error } = useGetTopNewsQuery("in");

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <div className="h-screen grid place-items-center text-lg font-medium text-red-500">
        {JSON.stringify(error.data)}
      </div>
    );

  return (
    <>
      <Navbar />
      <Catalogue />
      <NewsList articles={data} loading={isLoading} error={error}/>
      {/* <Carousel /> */}
      <Newesletter />
      <Features />
      <Footer />
    </>
  );
}
