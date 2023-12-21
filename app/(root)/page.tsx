'use client'

import Top from "@/components/Top/Top.jsx";
import Results from "@/components/Results.jsx";
import {useRef, useState} from "react";
import About from "@/components/About.jsx";
import Footer from "@/components/Footer.jsx";
import ErrorNotice from "@/components/ErrorNotice.jsx";

const MainPage = () => {

  const [results, setResults] = useState([])
  const scrollRef = useRef()
  const [error, setError] = useState(null)
  const [selectSize, setSelectSize] = useState('')
  const [selectTerrain, setSelectTerrain] = useState('')
  const [keywords, setKeywords] = useState('')
  const [description, setDescription] = useState('')

  const [lastRequest, setLastRequest] = useState(null)

  const formProps = {
    selectSize, setSelectSize, selectTerrain, setSelectTerrain, keywords, setKeywords, description, setDescription
  }

  const [isLoading, setIsLoading] = useState(false)

  const generateHandle = async () => {

    const formData = {
      size: selectSize,
      keywords: keywords.replaceAll(' ', ', '),  // РЅРµ СѓРІРµСЂРµРЅР°, С‡С‚Рѕ С„РѕСЂРјР°С‚ РѕРє
      terrain: selectTerrain,
      description: description
    }

    setIsLoading(true)
    try {
      const resp = await fetch('https://namegenerator.com/ai/generate/city-names',
        {
          method: "post",
          body: JSON.stringify(formData)
        }
      )

      const res = await resp.json()
      if (res.result) {
        setResults(res.result)
        if (scrollRef.current) scrollRef.current.scrollIntoView({top: '500px', behavior: 'smooth'})
        setSelectSize('')
        setSelectTerrain('')
        setKeywords('')
        setDescription('')
        setLastRequest(formData)
      } else {
        setError(res.error)
        setTimeout(() => {
          setError(null)
        }, 7000)
      }
    } catch (err) {
      console.log(err.message)
      setTimeout(() => {
        setError(null)
      }, 4000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="main h-full relative">
      <ErrorNotice error={error} setError={setError}/>
      <Top setResults={setResults} onGenerateClick={generateHandle} formProps={formProps} error={error}
           isLoading={isLoading}/>
      {
        results && results.length > 0 &&
        <Results results={results} scrollRef={scrollRef} onGenerateClick={generateHandle} lastRequest={lastRequest}
                 setResults={setResults} setError={setError}/>
      }
      <About/>
      <Footer/>
    </main>
  );
};

export default MainPage;
