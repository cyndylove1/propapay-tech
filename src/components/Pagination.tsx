import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 7;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Previous Arrow */}
      <button
        onClick={handlePrevious}
        className="hover:bg-gray-200 disabled:opacity-50 p-2 rounded"
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardArrowLeft size={20} />
      </button>

      {/* Pagination Numbers */}
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <div
              key={pageNumber}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-center ${
                pageNumber === currentPage
                  ? "border-green-500 relative"
                  : "border-gray-300"
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
              {pageNumber === currentPage && (
                <span className="bg-green-500 absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 transform rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Next Arrow */}
      <button
        onClick={handleNext}
        className="hover:bg-gray-200 disabled:opacity-50 p-2 rounded"
        disabled={currentPage === totalPages}
      >
        < MdOutlineKeyboardArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
