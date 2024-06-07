interface FilterProps {
    setFilter: (filter: string) => void;
}

const filterOptions = [
    'cleansers',
    'makeup-removers',
    'face-cleaners',
    'exfoliators',
    'toners',
    'masks',
    'wash-off-masks',
    'sheet-masks',
    'overnight-masks',
    'treatments',
]

export default function Filter({setFilter}: FilterProps) {
    return (
        filterOptions.map((option, index) => (
            <button key={index} onClick={() => setFilter(option)}>{option}</button>
        ))
    )
}