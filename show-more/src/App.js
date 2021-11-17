import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";

const NewsCard = (props) => {
  return (
    <div style={{ padding: "20",width:"48%",height:"60px" , padding:"6px" }}>
      <a href={props.url} style={{textDecoration:"none"}}>
        {props.title} by {props.author}
      </a>
    </div>
  );
};

const App = () => {
  const [hits, setHits] = useState([]);
  const [pageCount, setPageCount] = useState(100);
  const [currentPage, setcurrentPage] = useState(0);
  const [query, setQuery] = useState("startups");

  const URL = `https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}`;
  // const URL = `https://api.github.com/users/octocat/followers?per_page=${pageCount}&page=${currentPage}`;

  const handleFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((body) => {
        setHits([...body.hits]);
        setPageCount(body.nbPages);
      })
      .catch((error) => console.error("Error", error));
  };

  useEffect(() => {
    handleFetch();
  },[]);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    handleFetch();
  };

  return (
    <div style={{display:"flex",flexWrap: "wrap",}}>

      {hits.map((item) => {
        return (
          <NewsCard
            url={item.url}
            title={item.title}
            author={item.author}
            key={item.objectID}
          />
        );
      })}

      <ReactPaginate
        pageCount={Math.floor(pageCount / 10)}
        pageRange={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"container"}     
        pageClassName={"page"}
        breakLabel="..."
        nextLabel=">>"
        previousLabel="<<"
      />
    </div>
  );
};
export default App;
