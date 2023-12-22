import GeneratedItem from "@/components/GeneratedItem/GeneratedItem";
import {useEffect, useRef} from "react";

type Props = {
  favorites:string[],
  setFavorites: (favorites:string[])=>void,
  className?: string
}

const PopupInner = ({className, favorites, setFavorites}:Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.innerWidth >= 768) return
    if (ref.current) {
      ref.current.style.height = window.innerHeight * .9 - 170 + 'px'
    }
  }, [])

  return (
    <div className={`overflow-auto h-[312px] custom-scrollbar ${className}`} ref={ref}>
      {
        favorites.length > 0 && (
          <ul className="flex flex-col gap-3 h-full p-1">
            {
              favorites.map((item, index) => <GeneratedItem
                key={index}
                item={item}
                setFavorites={setFavorites}
                favorites={favorites}
                inPopup={true}
              />)
            }
          </ul>
        )
      }
      {
        favorites.length === 0 && <div className="flex-center h-full w-full font-extrabold">No saved ideas</div>
      }
    </div>
  );
};

export default PopupInner;
