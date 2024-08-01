import "./pagination.scss";

const Pagination = ({
  herosPerPage,
  length,
  handlePagination,
  currentPage,
}: any) => {
  let paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / herosPerPage); i++) {
    paginationNumber.push(i);
  }
  return (
    <div className="pagination">
      {paginationNumber.map((data) => (
        <button
          key={data}
          onClick={() => handlePagination(data)}
          className={currentPage === data ? "active" : ""}
        >
          {data}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
