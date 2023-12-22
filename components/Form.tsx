import Button from "./ui/form/Button";
import Input from "./ui/form/Input";
import Textarea from "./ui/form/Textarea";
import {ImSpinner2} from "react-icons/im";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/Select"

import {SIZE_SELECT_VALUES, TERRAIN_SELECT_VALUES} from "@/consts/formData.js";
import {FormEventHandler, MouseEventHandler} from 'react';

type Props = {
  onGenerateClick: () => void,
  selectSize: string,
  setSelectSize: (param: string) => void,
  selectTerrain: string,
  setSelectTerrain: (param: string) => void,
  keywords: string,
  setKeywords: (param: string) => void,
  description: string,
  setDescription: (param: string) => void,
  error: string | null,
  isLoading: boolean,
  setResults: (param: string[]) => void,
}

const Form = ({onGenerateClick, ...rest}: Props) => {

  const {
    selectSize,
    setSelectSize,
    selectTerrain,
    setSelectTerrain,
    keywords,
    setKeywords,
    description,
    setDescription,
    error, isLoading
  } = rest

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onGenerateClick()
  }

  return (
    <div className={`container relative z-20 ${error && "form-animation"}`}>
      <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto items-center mt-[40px]">
        <div className="flex max-md:flex-wrap gap-5 justify-center mb-5 ">
          <div className="w-1/2 max-md:w-full flex gap-5 flex-col items-center max-w-[300px]">
            <Select value={selectSize} onValueChange={(value) => setSelectSize(value)}>
              <SelectTrigger className="w-full max-w-[300px]">
                <SelectValue placeholder="Size or Significance"/>
              </SelectTrigger>
              <SelectContent className="bg-white">
                {
                  SIZE_SELECT_VALUES.map((value, index) => <SelectItem key={index} value={value}>{value}</SelectItem>)
                }
              </SelectContent>
            </Select>
            <Select value={selectTerrain} onValueChange={(value) => setSelectTerrain(value)}>
              <SelectTrigger className="w-full max-w-[300px]">
                <SelectValue placeholder="Terrain Type"/>
              </SelectTrigger>
              <SelectContent className="bg-white">
                {
                  TERRAIN_SELECT_VALUES.map((value, index) => <SelectItem key={index}
                                                                          value={value}>{value}</SelectItem>)
                }
              </SelectContent>
            </Select>

            <Input value={keywords} className="w-full max-w-[300px]" placeholder="Inspiration Keywords"
                   onChange={(e) => setKeywords(e.target.value)}/>
          </div>
          <div className="w-1/2 max-md:w-full max-w-[300px]">
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-full"
                      placeholder="Short Description">
            </Textarea>
          </div>
        </div>
        <Button type="submit" className="mt-[40px]" disabled={isLoading}>
          <div className="flex-center gap-4">
            {
              isLoading ? (
                  <>
                    <div className="animate-spin"><ImSpinner2/></div>
                    <span>Generating...</span>
                  </>
                )
                : <span>Generate</span>
            }
          </div>
        </Button>
      </form>
    </div>
  )
}

export default Form;
