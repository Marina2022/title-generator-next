import {useCallback, useEffect, ReactNode} from "react";

type Props = {
  children: ReactNode,
  isDeleteAllPopupOpen: boolean,
  setIsOpen: (param: boolean)=>void
}

const DesktopPopup = ({children, setIsOpen, isDeleteAllPopupOpen}:Props) => {

  const escHandler = useCallback((e:KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }, [setIsOpen])

  useEffect(() => {
    window.addEventListener('keydown', escHandler)
    return () => {
      window.removeEventListener('keydown', escHandler)
    }
  }, [escHandler])


  useEffect(() => {
    if (isDeleteAllPopupOpen) {
      window.removeEventListener('keydown', escHandler)
    } else {
      window.addEventListener('keydown', escHandler)
    }
  }, [escHandler, isDeleteAllPopupOpen])

  const outSideClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div onClick={outSideClick} className="top-0 left-0 fixed w-screen h-screen z-0">
      </div>
      <div
        className="w-[400px] absolute rounded-[8px] top-[55px] right-0 h-[396px] bg-white popup-shadow p-[10px] z-40">
        {children}
      </div>
    </>
  );
};

export default DesktopPopup;
