import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import search_icon from "../assets/search_icon.png";
import cross_icon from "../assets/cross_icon.png";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const isCollectionPage = location.pathname.includes("collection");

  return showSearch && isCollectionPage ? (
    <div className="border-t border-b border-gray-400 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={search_icon} alt="search" className="w-4" />
      </div>
      <img
        src={cross_icon}
        alt="cross"
        className="inline w-3 cursor-pointer"
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
      />
    </div>
  ) : null;
};

export default SearchBar;
