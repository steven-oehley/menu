import MenuCard from "./MenuCard";
import menu from "../data";

const Menu = ({ filter }) => {
  const filteredMenu = !filter
    ? menu
    : menu.filter((item) => item.category === filter);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-8 mt-20">
      {filteredMenu.map((item) => (
        // pass props that are unused does it hurt performance?
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Menu;
