import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { newsAction } from "../store/newsSlice";
import logo from "../assets/newsLogo.jpg";
import categories from './data/data'

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false); 
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearch = () => {
    dispatch(newsAction.setSearchArticle(searchTerm));
    dispatch(newsAction.setCategory(null));
    setSearchTerm('')
  };

  const handleCategoryChange = (category) => {
    dispatch(newsAction.setCategory(category));
    dispatch(newsAction.setSearchArticle('')); 
    setDropdownVisible(false);
  };

  return (
    <div className="flex border p-2 shadow items-center sticky bg-white top-0 w-full z-50">
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <img className="w-[40px] h-[40px] rounded-full" src={logo} alt="logo" />
      </div>
      <div className="ml-4 text-blue-400 text-xl font-bold">
        <Link className="mx-2" to="/">
          Home
        </Link>
        <Link className="mx-2" to="/favourite">
          Favroutie
        </Link>
      </div>
      <div className="relative ml-4">
        <button
          className="w-full rounded-lg p-1 flex items-center font-bold text-xl text-blue-400 tracking tracking-wider border-4 border-transparent active:border-white duration-300"
          onClick={toggleDropdown}
        >
          Category
        </button>
        {dropdownVisible && (
          <div className="absolute top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-200">
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    onClick={() => handleCategoryChange(category.toLowerCase())}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:flex ml-4">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 text-lg border border-blue-400 rounded-lg w-38 focus:outline-none"
        />
        <button onClick={handleSearch} className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-lg">Search</button>
      </div>
      <div className="ml-4 md:hidden">
        <button
          className="rounded-lg p-1 flex items-center font-bold text-xl text-blue-400 tracking tracking-wider border-4 border-transparent active:border-white duration-300"
          onClick={toggleSearch}
        >
          Search
        </button>
        {searchVisible && (
          <div className="absolute top-full mt-2 bg-white border border-blue-400 shadow-lg rounded-lg w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 text-lg border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-300"
            />
            <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full mt-2">Search</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
