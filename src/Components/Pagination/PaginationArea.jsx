import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const PaginationArea = ({ pageNumber, Paginate, currentPage, next, prev, mobileview }) => {
    return (
        <>

            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={prev} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <FaLongArrowAltLeft />
                            </a>
                        </li>
                    }
                    {mobileview &&
                        <>
                            {pageNumber.map((items, i) => (
                                <li onClick={() => Paginate(items)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626]" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300"}

                                >
                                    {items + 1}
                                </li>
                            ))}
                        </>
                    }
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={next} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <FaLongArrowAltRight />
                            </a>
                        </li>
                    }
                </ul>
            </nav>

        </>
    )
}

export default PaginationArea