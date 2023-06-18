import React from "react";
import SearchBar from "../UI/Search";
import './Header.scss';


const Header = () => {
    return (
        <div className="header">
            <p>User List</p>
            <SearchBar placeholder="Search..." />
            <img src="https://reqres.in/img/faces/7-image.jpg" alt="" />
        </div>
    )
}

export default Header;