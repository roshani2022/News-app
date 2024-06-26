import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { newsAction } from "../store/newsSlice";
import defaultImage from "../assets/default-img.jpg";
import { favActions } from "../store/favSlice";
import categories from "./data/data";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, loading, totalPages, page, searchArticle, category } =
    useSelector((state) => state.news);

  const api_Key = import.meta.env.VITE_NEWS_API_KEY;

  

 
  const fetchData = async () => {
    dispatch(newsAction.fetchNewsStart());
    let url = `https://newsdata.io/api/1/latest?apikey=${api_Key}`;

    if (category) {
      url += `&category=${category}`;
    }
    if (searchArticle) {
      url += `&q=${searchArticle}`;
    }

    url += `&q=${page}`;

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.results);
        dispatch(newsAction.fetchNewsSuccess(data.results));
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      dispatch(newsAction.fetchNewsFailure(error.message));
      toast.error("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, category, searchArticle, dispatch]);

  const handleReadMore = (article) => {
    navigate(`/news/${article.title}`, { state: { article } });
  };

  const handlePrev = () => {
    if (page > 1) {
      dispatch(newsAction.setPage(page - 1));
    }
  };

  const handleNext = () => {
    dispatch(newsAction.setPage(page + 1));
  };

  const handleAddFavorite = (article) => {
    dispatch(favActions.addNews(article));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={40}
          width={50}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3 mt-4 mx-4">
        {articles.map((item, key) => (
          <div className="w-full rounded-lg shadow-md" key={key}>
            <img
              className="object-cover w-full h-48"
              src={item.image_url || defaultImage}
              alt="image"
              onError={(e) => (e.target.src = defaultImage)}
            />
            <div className="p-4">
              <h4
                className="text-xl font-semibold text-blue-600 cursor-pointer"
                onClick={() => handleAddFavorite(item)}
              >
                {item.title}
              </h4>
              <p className="mb-2 leading-normal">{item.description}</p>
              <button
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                onClick={() => handleReadMore(item)}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};

export default News;

