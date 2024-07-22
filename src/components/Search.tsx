import React, { useState } from "react";
import Input from "./Input";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Input
        type="search"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
