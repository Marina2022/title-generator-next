import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Form from "../Form.jsx";

const Top = ({setResults, onGenerateClick, formProps, error, isLoading}) => {
  return (
    <section className="top text-center">
      <Header />
      <Hero/>
     <Form  setResults={setResults} onGenerateClick={onGenerateClick} isLoading={isLoading} {...formProps} error={error} />
    </section>
  );
};

export default Top;
