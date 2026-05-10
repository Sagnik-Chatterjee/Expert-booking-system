const Pagination = ({
  currentPage,
  totalPages,
  setPage,
}) => {

  return (
    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setPage(currentPage - 1)
        }
      >
        Prev
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setPage(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;