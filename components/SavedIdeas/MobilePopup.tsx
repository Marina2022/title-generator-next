import {SheetContent, SheetHeader,} from "@/components/SavedIdeas/sheet"
import React from 'react';

type Props = {
  children: React.ReactNode
}

const MobilePopup = ({children}:Props) => {
  return (
    <SheetContent className="w-full h-[90%] bg-white border-t-[2px] border-primary ">
      <SheetHeader className="block text-[#343D43]">
        <h3 className="font-extrabold text-[18px] mb-5 mt-2 block text-left">Saved Ideas</h3>
        {children}
      </SheetHeader>
    </SheetContent>
  );
};

export default MobilePopup;
