//PACKAGE IMPORTS

//INTERNAL IMPORTS
import { useEffect, useState } from "react";
import "./app.scss";
import { List, Pagination } from "./components";

const App = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [herosPerPage] = useState(10);

  const handlePage = (page: number) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      setPage(page);
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://tppublic.blob.core.windows.net/test-data/super-heroes.json"
        );
        const data = await response.json();
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage, herosPerPage]);

  const indexOfLastHero = currentPage * herosPerPage;
  const indexOfFirstHero = indexOfLastHero - herosPerPage;
  const currentHeros = data.slice(indexOfFirstHero, indexOfLastHero);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {page === 0 && (
        <>
          <div className="texture">
            <div className="glass">
              <div className="content">
                <div className="bordered">
                  <h1 className="title ">The Super Hero's Almanac</h1>
                </div>
              </div>
              <button>enter</button>
            </div>
          </div>
          <div className="bg" onClick={handlePage(1)}></div>
        </>
      )}
      {page === 1 && (
        <div className="texture">
          <div className="glass flex-start">
            <div className="content-inner">
              <div className="bordered">
                <h1 className="text-center">The Super Hero's Almanac</h1>
              </div>
              <button>List</button>
              <button>Grid</button>

              <List heros={currentHeros} loading={loading} />
              <Pagination
                length={data.length}
                herosPerPage={herosPerPage}
                handlePagination={handlePagination}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
