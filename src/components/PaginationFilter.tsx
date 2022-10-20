import { useContext, useEffect, useState } from 'react'
import { productContext } from '../context/productsProvider'
import { Api } from '../libs/axios'

export default function PaginationFilter({ numPages, apiURL }: any) {
  const [currentPage, setCurrentPage] = useState(0)
  const { changeProductContext } = useContext(productContext)
  async function changeCurrentPage() {
    const { data } = await Api.get(`${apiURL}?p=${currentPage}`)
    changeProductContext(data)
  }
  useEffect(() => {
    changeCurrentPage()
  }, [currentPage])

  const validatePreviousPage = currentPage !== 0 ? currentPage - 1 : 0
  const validateNextPage = currentPage !== numPages ? currentPage + 1 : numPages
  return (
    <nav className="self-center ">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => setCurrentPage(validatePreviousPage)}
            className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {[...Array(numPages + 1)].map((_, i) => (
          <li key={i}>
            <button
              onClick={() => setCurrentPage(i)}
              className={`${
                currentPage === i ? 'text-brand' : 'text-gray-500'
              } py-2 px-3 leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {i + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => setCurrentPage(validateNextPage)}
            className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}
