import { SearchPropsType, StringType, VoidType } from "../types";

export const Search = ({ onChange }: SearchPropsType) => {
  const handleSearch = (searchText: StringType): VoidType => {
    onChange(searchText);
  };

  return (
    <div className="flex justify-center w-1/2">
      <input
        type="text"
        className="bg-white input input-bordered"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};
