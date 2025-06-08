// src/components/Pagination.jsx
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-3 py-1 border rounded ${
              currentPage === pageNum
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 dark:text-white'
            }`}
            aria-current={currentPage === pageNum ? 'page' : undefined}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
}
