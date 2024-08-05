//PACKAGE IMPORTS

//INTERNAL IMPORTS
import { useEffect, useState } from "react";
import "./app.scss";
import { Grid, List, Pagination } from "./components";
import classNames from "classnames";

const App = () => {
  const [page, setPage] = useState<any>(0);
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(localStorage.getItem("tab") || 'list');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [herosPerPage] = useState(12);
  const indexOfLastHero = currentPage * herosPerPage;
  const indexOfFirstHero = indexOfLastHero - herosPerPage;
  const currentHeros = data.slice(indexOfFirstHero, indexOfLastHero);

  const tabs = [
    { id: "1szxa12", title: "List", value: "list" },
    { id: "21454ws", title: "Grid", value: "grid" },
  ];

  useEffect(() => {
    const page = localStorage.getItem("page");

    if (page) {
      setPage(parseInt(page));
    }

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
  }, []);

  const handlePage = (page: any) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      localStorage.setItem("page", page);
      setPage(page);
    };
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
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
              <div className="tabs">
                {tabs.map((item, i) => (
                  <button
                    key={i + item.id}
                    className={classNames(tab === item.value && "active")}
                    onClick={() => {
                      setTab(item.value);
                      localStorage.setItem("tab", item.value);
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              {(() => {
                switch (tab) {
                  case "list":
                    return (
                      <>
                        <List heros={currentHeros} loading={loading} />
                        <Pagination
                          length={data.length}
                          herosPerPage={herosPerPage}
                          handleNext={handleNext}
                          handleBack={handleBack}
                          handlePagination={handlePagination}
                          currentPage={currentPage}
                        />
                      </>
                    );
                  case "grid":
                    return (
                      <>
                        <Grid heros={currentHeros} loading={loading} />
                        <Pagination
                          length={data.length}
                          herosPerPage={herosPerPage}
                          handleNext={handleNext}
                          handleBack={handleBack}
                          handlePagination={handlePagination}
                          currentPage={currentPage}
                        />
                      </>
                    );
                  default:
                    return <></>;
                }
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
