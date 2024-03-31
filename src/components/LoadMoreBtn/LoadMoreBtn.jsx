import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({handleMoreImage }) => {
  return (
      <div>
        <button  onClick={handleMoreImage } className={css.LoadMoreBtn}>Load More</button>
      </div>
  )
}

export default LoadMoreBtn

