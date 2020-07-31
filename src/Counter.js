import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Counter() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("react");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=react"
  );
  const message = "Loading.... ";
  const [loading, setLoading] = useState(false);
  const getNews = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    //  setSearch(e.target.value);
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`);
  };
  useEffect(() => {
    getNews();
  }, [url]);
  const searchForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button>Search</button>
      </form>
    );
  };

  const showNews = () => {
    return news.map((singleNews, index) => (
      <div className="app-container" key={index}>
        <h2 className="news">{singleNews.title}</h2>

        <hr></hr>
      </div>
    ));
  };
  return (
    <div>
      <h1> News App</h1>
      {searchForm()}
      <h2>{!loading ? showNews() : <Loading message={message} />}</h2>
    </div>
  );
}
