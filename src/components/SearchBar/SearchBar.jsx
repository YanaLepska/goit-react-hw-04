import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";


const SearchBar = ({ onSearchImg }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();
    if (query === "") {
      toast('Please, enter search requrest!', {
      duration: 3500,
      position: 'top-center',
      style: {
      border: '2px solid #713200',
      padding: '16px',
        color: 'rgb(222, 48, 48)',
      backgroundColor:'rgba(250, 235, 215)',
    }
      });
      return;
    }
    onSearchImg(query);
  };

  return (
    <div>
      <header className={css.header}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button className={css.btnSearch} type="submit">
            Search
          </button>
          <Toaster />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
