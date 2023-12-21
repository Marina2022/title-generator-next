import {useState} from "react";
import DesktopPopup from "@/components/SavedIdeas/DesktopPopup.jsx";
import PopupInner from "@/components/SavedIdeas/PopupInner.jsx";
import Button from "@/components/ui/form/Button.jsx";
import DeleteAllPopup from "@/components/SavedIdeas/DeleteAllPopup.jsx";

import {Sheet, SheetTrigger} from "@/components/SavedIdeas/sheet.tsx"
import MobilePopup from "@/components/SavedIdeas/MobilePopup.jsx";

const SavedIdeas = ({favorites, setFavorites}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [isDeleteAllPopupOpen, setIsDeleteAllPopupOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
    setIsDeleteAllPopupOpen(false)
  }

  const downloadHandler = () => {
    let element = document.createElement('a');
    const text = favorites.reduce((acc, item) => acc + "\n" + item)
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'Favorites.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div className="relative">
      <Sheet>
        <div>
          <SheetTrigger className="absolute inset-0 h-full w-full md:hidden"></SheetTrigger>
          <div
            onClick={toggleOpen}
            className={`cursor-pointer flex-center gap-2 px-4 py-1 hover:outline hover:outline-[1px]  hover:outline-[#FFC04D] cursor-pointer transition transition-color transition-300 bg-[#fff8eb] rounded-full ${isOpen && 'outline outline-[1px] outline-[#FFC04D]'}`}>
            <svg fill="#FFC04D" xmlns="http://www.w3.org/2000/svg" className="item__icon item__icon--star"
                 viewBox="0 0 22 22" width="22" height="22">

              <path id="star"
                    d="M17.5085 13.6854C17.2236 13.976 17.0927 14.3963 17.1576 14.8085L18.1354 20.5049C18.2179 20.9878 18.0243 21.4764 17.6405 21.7554C17.2643 22.0448 16.7639 22.0796 16.3536 21.848L11.4824 19.1735C11.313 19.0785 11.1249 19.0276 10.9324 19.0218H10.6344C10.531 19.038 10.4298 19.0727 10.3374 19.126L5.46505 21.8133C5.22418 21.9406 4.95142 21.9858 4.68415 21.9406C4.03304 21.811 3.59859 21.158 3.70528 20.4691L4.68415 14.7726C4.74904 14.3569 4.61816 13.9343 4.3333 13.6391L0.361716 9.58673C0.0295595 9.24749 -0.0859254 8.73805 0.0658548 8.2784C0.213236 7.8199 0.589386 7.48529 1.04363 7.41003L6.50991 6.57525C6.92566 6.53009 7.29081 6.26379 7.47779 5.87013L9.88647 0.671534C9.94366 0.555752 10.0174 0.449233 10.1064 0.358923L10.2054 0.277876C10.2571 0.21767 10.3165 0.167884 10.3825 0.12736L10.5024 0.0810472L10.6894 0H11.1524C11.566 0.0451549 11.93 0.305664 12.1203 0.694691L14.5609 5.87013C14.7368 6.24874 15.0789 6.51157 15.4737 6.57525L20.94 7.41003C21.402 7.4795 21.788 7.81527 21.9409 8.2784C22.085 8.74268 21.9607 9.25212 21.6219 9.58673L17.5085 13.6854Z"></path>
            </svg>
            <span className="max-sm:text-[14px]">Saved <span className="max-md:hidden">Ideas</span></span>
            <div
              className="bg-white p-1 rounded-full w-[30px] h-[30px] flex-center text-[#FFC04D] font-extrabold text-[14px]">{favorites.length}</div>

            <svg className={` ${isOpen && 'rotate-180'}  `}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 9 7" width="9" height="7">
              <path id="small-arrow"
                    d="M5.286 6 8.73 1.617A1 1 0 0 0 7.943 0H1.057a1 1 0 0 0-.786 1.618l3.443 4.381a1 1 0 0 0 1.572 0Z"></path>
            </svg>
          </div>
        </div>

        {/*desktop popup*/}
        <div className="max-md:hidden ">
          {
            isOpen && (
              <DesktopPopup setIsOpen={setIsOpen} isDeleteAllPopupOpen={isDeleteAllPopupOpen}>
                {
                  isDeleteAllPopupOpen &&
                  <DeleteAllPopup setIsDeleteAllPopupOpen={setIsDeleteAllPopupOpen} setFavorites={setFavorites}/>
                }
                <PopupInner favorites={favorites} setFavorites={setFavorites}/>
                <div className="flex justify-between mt-4 gap-4 px-1 pb-1">
                  <Button className="w-1/2" onClick={downloadHandler} disabled={favorites.length === 0}>Download</Button>
                  <Button className="w-1/2" variant="secondary" onClick={() => setIsDeleteAllPopupOpen(true)}
                          disabled={favorites.length === 0}>Delete All</Button>
                </div>
              </DesktopPopup>
            )
          }
        </div>

        {/*mobile popup*/}
        <div className="md:hidden relative">
          {
            <MobilePopup>
              {
                isDeleteAllPopupOpen &&
                <DeleteAllPopup setIsDeleteAllPopupOpen={setIsDeleteAllPopupOpen} setFavorites={setFavorites}/>
              }
              <PopupInner favorites={favorites} setFavorites={setFavorites} className="pb-[100px]"/>
              <div
                className="flex justify-between mt-4 gap-4 px-1 pb-1 absolute bottom-[14px] left-[24px] right-[24px] z-50">
                <Button className="w-1/2" onClick={downloadHandler} disabled={favorites.length === 0}>Download</Button>
                <Button className="w-1/2" variant="secondary" onClick={() => setIsDeleteAllPopupOpen(true)}
                        disabled={favorites.length === 0}>Delete All</Button>
              </div>
            </MobilePopup>
          }
        </div>
      </Sheet>
    </div>
  )
}

export default SavedIdeas;
