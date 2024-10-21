import FilterBar from "./FilterBar";

const Header = ({ filter, onFilterClick }) => {
  return (
    <header>
      <h2 className="text-6xl text-center">
        <span className="border-b-4 border-accent">Our Menu</span>
      </h2>
      <FilterBar filter={filter} onFilterClick={onFilterClick} />
    </header>
  );
};
export default Header;
