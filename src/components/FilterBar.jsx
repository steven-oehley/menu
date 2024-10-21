import { options } from "../assets/constants";

const FilterBar = ({ filter, onFilterClick }) => {
  return (
    <div className="flex justify-center gap-4 max-w-4xl mt-8 mx-auto">
      {options.map((option) => (
        <button
          key={"id_" + option}
          className={`btn ${
            filter === option ? "btn-active" : "btn-outline"
          } btn-primary`}
          onClick={() => onFilterClick(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FilterBar;
