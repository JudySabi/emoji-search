import Line from "./Line";
import data from "../data.json";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  //   const ifStateEmpty = (search === "" ? data.slice(0, 12).map((elem, index) =>
  //     <Line elem={elem} inde={index} />)

  return (
    <div className="container">
      <div className="search">
        <h1>Emoji Search</h1>
        {/* c'est sur que c'est le onChange qui va me changer le state et pouvoir m'afficher les keywords qui correspondent aux lettres misent dans l'input */}
        <input
          type="text"
          placeholder="what emoji are you looking for ?"
          onChange={handleSearchChange}
        />
      </div>

      {data.slice(0, 12).map((elem, index) => {
        console.log(elem.keywords);
        const onSearch = elem.keywords.indexOf(search);
        return (
          // si l'input est égale au keywords de l'objet alors tu me l'affiche
          !onSearch && (
            <div className="lines">
              <Line elem={elem} index={index} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Search;
