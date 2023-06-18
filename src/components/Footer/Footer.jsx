import React from "react";
import './footer.scss';


const Pagination = ({ handlePageChange, currentPage,fetchedData }) => {

  const btnLength = new Array(fetchedData.total_pages).fill().map((_, i) => i + 1);
  const numberOfGrowingStepsPerPage = fetchedData.total / fetchedData.total_pages;

  return (
    <div className="footer">
      { numberOfGrowingStepsPerPage ?
      <div className="footer-text" style={{display: "flex"}} >
        <p>Showing {currentPage * numberOfGrowingStepsPerPage - fetchedData.total_pages} to 
        {currentPage * numberOfGrowingStepsPerPage} of {fetchedData.total} entries</p>
      </div> : <div className="spinner" ></div>
      } 
      <div className="footer-pagination">
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="btnHandler">
        &laquo;
        </button>
        {btnLength.map((pageNumber, i) => (
            <button
            key={i}
            style={{ backgroundColor: currentPage === pageNumber ? "#DC3545" : null }}
            >
            {pageNumber}
            </button>
        ))}
        <button disabled={currentPage === fetchedData.total_pages} onClick={() => handlePageChange(currentPage + 1)} className="btnHandler">
        &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;