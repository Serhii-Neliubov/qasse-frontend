import useInput from "../../hooks/useInput.tsx";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
    setSearchTerm: (search: string) => void;
}

export default function Search({setSearchTerm}: SearchProps) {
    const search = useInput('');

    function searchHandler() {
        setSearchTerm(search.value);
    }

    return (
        <div>
            <input
                placeholder="Find products, brands, reviewes and more..."
                {...search}
            />
            <button onClick={searchHandler}>
                <IoSearch />
            </button>
        </div>

    )
}