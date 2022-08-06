import { FiSearch } from "react-icons/fi";

export default function Searchbar({
  pesquisa,
  setPesquisa,
  searchMovie,
  setEnterPressed,
  placeholder,
}) {
  return (
    <div
      className="
    flex 
    
    bg-azul-900 
    py-3 
    px-6 
    space-x-6 
    rounded-full 
    mt-2
    mx-4
    "
    >
      <FiSearch className="text-4xl " />
      <input
        type="text"
        placeholder={placeholder}
        className="
        w-full
        bg-transparent
        outline-none
        text-xl
          "
        value={pesquisa}
        onChange={({ target }) => {
          setPesquisa(target.value);
          setEnterPressed(false);
        }}
        onKeyDown={searchMovie}
      />
    </div>
  );
}
