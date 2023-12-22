import Button from "@/components/ui/form/Button";
import {useCallback, useEffect} from "react";

type Props = {
  setIsDeleteAllPopupOpen: (param:boolean)=>void,
  setFavorites: (param:string[])=>void
}

const DeleteAllPopup = ({setIsDeleteAllPopupOpen, setFavorites}:Props) => {

  const escHandler = useCallback((e:KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsDeleteAllPopupOpen(false)
    }
  }, [setIsDeleteAllPopupOpen])

  useEffect(() => {
    window.addEventListener('keydown', escHandler)
    return () => {
      window.removeEventListener('keydown', escHandler)
    }
  }, [escHandler])

  const deleteAllHandler = () => {
    setFavorites([])
    setIsDeleteAllPopupOpen(false)
  }

  return (
    <>
      <div className="bg-white opacity-75 absolute w-full h-full inset-0 z-40"></div>
      <div
        className="w-[380px] h-[134px] p-3 pt-5 absolute rounded-[8px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white popup-shadow z-40">
        <div className="mx-[35px] text-center mb-5 leading-[1.1]">
          Are you sure you want to delete all saved ideas?
        </div>
        <div className="flex justify-between mt-4 gap-4 px-1 pb-1">
          <Button className="w-1/2" onClick={deleteAllHandler}>Yes, delete</Button>
          <Button className="w-1/2" variant="secondary" onClick={() => setIsDeleteAllPopupOpen(false)}>No,
            leave</Button>
        </div>
      </div>
    </>
  );
};

export default DeleteAllPopup;
