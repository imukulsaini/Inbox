import "./header.css";
import { filterNames } from "./utils";

export function InboxHeader({ setFilter, selectedFilterName }) {
  const changeFilters = (e) => {
    if (e.target.localName === "li") {
      const filterName = e.target.innerText.toLowerCase();
      setFilter(filterName);
    }
  };

  return (
    <div className="header">
      <div className="header-name">Filter By : </div>
      <nav className="header__nav">
        <ul onClick={changeFilters} className="header__nav-info">
          {filterNames.map((filter) => {
            const isItemSelected =
              selectedFilterName === filter.name.toLocaleLowerCase();

            return (
              <li
                key={filter.id}
                className={
                  isItemSelected
                    ? "header__nav-item selected-route"
                    : "header__nav-item"
                }
              >
                {filter.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
