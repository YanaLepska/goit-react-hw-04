import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getImages } from "./components/Api/Api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [dataFetched, setDataFetched] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chooseImage, setChooseImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setIsLoading(true);
        const response = await getImages(query, page);
        const newImages = response.data.results;

        setImages((prevImages) => [...prevImages, ...newImages]);
        setDataFetched(response.data.total_pages > page);
        if (newImages.length === 0) {
          toast("Images not found ", {
            duration: 3500,
            position: "top-center",
            style: {
              border: "2px solid #713200",
              padding: "16px",
              color: "rgb(222, 48, 48)",
              backgroundColor: "rgba(250, 235, 215)",
            },
          });
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSearchImg = (keyWord) => {
      if (query === keyWord) {
      toast("Enter new requarest",{
            duration: 3500,
            position: "top-center",
            style: {
              border: "2px solid #713200",
              padding: "16px",
              color: "rgb(222, 48, 48)",
              backgroundColor: "rgba(250, 235, 215)",
            }
      });
      return;
    }
    setQuery(keyWord);
    setImages([]);
    setPage(1);
    setDataFetched(false);
  };

  const handleMoreImage = () => {
    if (isLoading) return;
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setChooseImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setChooseImage(null);
    setModalIsOpen(false);
  };
  return (
    <>
      <SearchBar onSearchImg={onSearchImg} />
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} openModal={openModal} />}
      {isError && <ErrorMessage />}
      {dataFetched && <LoadMoreBtn handleMoreImage={handleMoreImage} />}
      {chooseImage && (
        <ImageModal
          image={chooseImage}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default App;
