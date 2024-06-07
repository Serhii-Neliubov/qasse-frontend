import {useEffect, useState} from "react";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import {ProductsService} from "../../services/ProductsService.ts";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export default function Pagination({currentPage, setCurrentPage}: PaginationProps) {
    const [totalPages, setTotalPages] = useState<number>(5);

    useEffect(() => {
        ProductsService.getTotalPages('')
            .then((totalPages) => setTotalPages(totalPages))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <button disabled={currentPage == 1} onClick={() => setCurrentPage(currentPage - 1)}>
                <MdKeyboardDoubleArrowLeft />
            </button>

            <span>Page {currentPage} out of {totalPages}</span>

            <button disabled={currentPage == totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                <MdKeyboardDoubleArrowRight />
            </button>
        </div>
    )
}