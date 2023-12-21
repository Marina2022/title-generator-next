import CopyButton from "@/components/GeneratedItem/CopyButton.jsx";
import StarButton from "@/components/GeneratedItem/StarButton.jsx";
import RemoveButton from "@/components/GeneratedItem/RemoveButton.jsx";

const GeneratedItem = ({item, setFavorites, favorites, inPopup = false}) => {

  const toggleFavorites = () => {
    if (favorites.includes(item)) {
      const newFavs = favorites.filter(fav => fav !== item)
      setFavorites(newFavs)
    } else {
      setFavorites([...favorites, item])
    }
  }

  const removeHandler = () => {
    const newFavs = favorites.filter(fav => fav !== item)
    setFavorites(newFavs)
  }

  return (
    <li className="bg-[#eafafa] rounded-xl flex justify-between px-[6px] py-[6px] items-center pl-4">
      <div className="line-clamp-1">
        {item}
      </div>
      <div className="flex gap-2">
        <div><CopyButton value={item}/></div>
        {
          inPopup ? (
              <div><RemoveButton onClick={removeHandler}/></div>
            )
            : <div><StarButton onClick={toggleFavorites} liked={favorites.includes(item)}/></div>
        }
      </div>
    </li>
  );
};

export default GeneratedItem;
