import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [filter, setFilter] = useState(null);
  const handleFilterClick = (category) => {
    if (category === "all") {
      setFilter(null);
      return;
    }

    setFilter(category);
  };
  return (
    <section className="min-h-screen w-full p-12">
      <Header filter={filter} onFilterClick={handleFilterClick} />
      <Menu filter={filter} />
    </section>
  );
};
export default App;
