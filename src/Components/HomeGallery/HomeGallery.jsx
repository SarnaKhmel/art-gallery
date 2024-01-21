import { useEffect } from "react";
import { fetchRandomImg } from "../../redux/slices/randomImg";
import { useDispatch, useSelector } from "react-redux";

const HomeGallery = () => {
  const dispatch = useDispatch();
  const artObjects = useSelector((state) => state.galleryReducer.artObjects);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchRandomImg());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div>
        <ul>
          {artObjects.items &&
            artObjects.items.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default HomeGallery;
