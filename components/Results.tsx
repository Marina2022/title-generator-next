import GeneratedItem from "@/components/GeneratedItem/GeneratedItem";
import {Dispatch, MutableRefObject, SetStateAction, useEffect, useState} from "react";
import SavedIdeas from "@/components/SavedIdeas/SavedIdeas";
import {ImSpinner2} from "react-icons/im";
import {MyData} from '@/types';
import Button from '@/components/ui/form/Button';
import {getTitles} from "@/serverActions/getTitles";

type Props = {
    results: string[],
    scrollRef: MutableRefObject<HTMLDivElement | null>,
    lastRequest: MyData | null,
    setResults: Dispatch<SetStateAction<string[]>>
    setError: (error: string | null) => void
}

const Results = ({results, scrollRef, lastRequest, setResults, setError}: Props) => {

    const [isGenerateMoreLoading, setIsGenerateMoreLoading] = useState(false)

    const [favorites, setFavorites] = useState<string[]>(() => {
        const str = localStorage.getItem('favs')
        return str ? JSON.parse(str) : []
    })

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favorites))
    }, [favorites])

    const generateMoreHandle = async () => {
        if (results) {

            setIsGenerateMoreLoading(true)
            try {
                const res = await getTitles(lastRequest)

                if (res.success) {
                    setResults((prev) => [...prev, ...res.result]);
                    if (scrollRef.current) scrollRef.current.scrollIntoView({behavior: 'smooth'})

                } else {
                    setError(res.error)
                    setTimeout(() => {
                        setError(null)
                    }, 7000)
                }
            } catch (err: any) {
                console.log(err.message)
                setTimeout(() => {
                    setError(null)
                }, 4000)
            } finally {
                setIsGenerateMoreLoading(false)
            }
        }
    }

    return (
        <div className="container">
            <div ref={scrollRef} className="h-1"></div>
            <div className="border-b border-primary">
                <div className="flex justify-between mt-[50px] mb-[40px] items-center">
                    <div className="text-[18px] font-extrabold max-sm:text-[16px]"><span
                        className="text-primary">10000+</span> items in our database
                    </div>
                    <SavedIdeas favorites={favorites} setFavorites={setFavorites}/>
                </div>
                <ul className="flex flex-col gap-4 mb-[48px]">
                    {
                        results.map((item, index) => <GeneratedItem
                            key={index}
                            item={item}
                            setFavorites={setFavorites}
                            favorites={favorites}/>)
                    }
                </ul>
                <Button disabled={isGenerateMoreLoading} className="mb-[80px]" onClick={generateMoreHandle}>
                    <div className="flex-center gap-4">
                        {
                            isGenerateMoreLoading ? (
                                    <>
                                        <div className="animate-spin"><ImSpinner2/></div>
                                        <span>Generating...</span>
                                    </>
                                )
                                : <span>Generate More</span>
                        }
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Results;
