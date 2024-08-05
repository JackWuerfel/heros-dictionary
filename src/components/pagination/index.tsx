import React, { useState } from "react";
import "./pagination.scss";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { XCircle } from "@untitled-ui/icons-react";

const Pagination = ({
  herosPerPage,
  length,
  handlePagination,
  handleNext,
  handleBack,
  currentPage,
}: any) => {
  let paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / herosPerPage); i++) {
    paginationNumber.push(i);
  }

  const [showAll, setShowAll] = useState(false);

  const showAllPagination = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      {showAll && (
        <XCircle
          onClick={() => showAllPagination()}
          className={classNames("pagination-button--all-close")}
        />
      )}
      <div className="pagination">
        {!showAll ? (
          <>
            <button
              className={classNames("pagination-button")}
              onClick={currentPage > 1 ? () => handleBack() : () => ""}
            >
              Back
            </button>
            {paginationNumber.map((data: any, index: any) => {
              return (
                <React.Fragment key={index + uuidv4()}>
                  {index < currentPage + 2 && (
                    <>
                      {index > currentPage - 2 && (
                        <button
                          className={classNames(
                            currentPage === data ? "active" : "",
                            "pagination-button"
                          )}
                          onClick={() => handlePagination(data)}
                        >
                          {index + 1}
                        </button>
                      )}
                    </>
                  )}
                </React.Fragment>
              );
            })}
            {currentPage < length - 4 && (
              <button
                className={"pagination-button"}
                onClick={() => showAllPagination()}
              >
                ...
              </button>
            )}
            {currentPage < paginationNumber.length - 4 && (
              <>
                {paginationNumber.map((data: any, index: any) => {
                  return (
                    <React.Fragment key={index + uuidv4()}>
                      {index >= paginationNumber.length - 3 && (
                        <button
                          className={classNames(
                            currentPage === data ? "active" : "",
                            "pagination-button"
                          )}
                          onClick={() => handlePagination(data)}
                        >
                          {index + 1}
                        </button>
                      )}
                    </React.Fragment>
                  );
                })}
              </>
            )}
            <button
              className={classNames("pagination-button next")}
              onClick={
                currentPage < paginationNumber.length
                  ? () => handleNext()
                  : () => ""
              }
            >
              Next
            </button>
          </>
        ) : (
          <>
            <div>
              {paginationNumber.map((data: any, index: any) => {
                return (
                  <React.Fragment key={index + uuidv4()}>
                    <button
                      className={classNames(
                        currentPage === data ? "active" : "",
                        "pagination-button--all"
                      )}
                      onClick={() => handlePagination(data)}
                    >
                      {index + 1}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Pagination;
