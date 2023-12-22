import Header from "./Header";
import Hero from "./Hero";
import Form from "../Form";

type formdata = {
  selectSize: string,
  setSelectSize: (selectSize:string)=>void,
  selectTerrain: string,
  setSelectTerrain: (selectTerrain: string)=>void,
  keywords: string,
  setKeywords: (keywords: string)=>void,
  description: string,
  setDescription: (description: string)=>void
}

type Props = {
  formProps: formdata,
  setResults: (results: string[])=>void,
  error: string | null,
  isLoading: boolean,
  onGenerateClick: ()=>void
}

const Top = ({setResults, onGenerateClick, formProps, error, isLoading}:Props) => {
  return (
    <section className="top text-center">
      <Header/>
      <Hero/>
      <Form setResults={setResults} onGenerateClick={onGenerateClick} isLoading={isLoading} {...formProps}
            error={error}/>
    </section>
  );
};

export default Top;
