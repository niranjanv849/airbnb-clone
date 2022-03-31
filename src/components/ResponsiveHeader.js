import React, { useState } from "react";
import style from "../style/responsiveHeader.module.css";
import HeaderDropdown from "./HeaderDropdown";
import SearchDropdown from "./SearchDropdown";

export default function ResponsiveHeader({ translateHeader }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchInput, setSearchDropdownInput] = useState(false);

  const onChange = (e) => {
    setSearchDropdownInput(e.target.value);
  };
  return (
    <>
      <div
        className={style.ResponsiveHeader}
        style={{
          backgroundColor: dropdownVisible ? "#ffffff" : "",
          bottom: dropdownVisible ? "0" : "",
        }}
      >
        <div className="d-flex align-items-center py-2">
          <div
            className={style.searchContainer}
            onClick={() => setDropdownVisible(true)}
            style={{
              boxShadow: translateHeader ? "0px 2px 5px rgba(0,0,0,0.5)" : "",
              backgroundColor: dropdownVisible ? "#F7F7F7" : "",
              border: dropdownVisible ? "1px solid #cccccc" : "",
              boxShadow: dropdownVisible ? "" : "0px 2px 5px rgba(0,0,0,0.5)",
            }}
          >
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="where are you going?"
              onChange={onChange}
            />
          </div>
          {dropdownVisible ? (
            <button onClick={() => setDropdownVisible(false)}>CANCEL</button>
          ) : (
            ""
          )}
        </div>
        {dropdownVisible ? (
          searchInput.length > 0 ? (
            <SearchDropdown />
          ) : (
            <HeaderDropdown />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}
