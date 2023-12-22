import {useEffect, useState} from "react";

type Props = {
  value: string
}

const CopyButton = ({value}:Props) => {

  const [copyMessageIsVisible, setCopyMessageIsVisible] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(function () {
      setCopyMessageIsVisible(true)
    }, function (err) {
      console.error('An error occurred while copying text: ', err);
    });
  }

  useEffect(() => {
    if (copyMessageIsVisible) {
      setTimeout(() => setCopyMessageIsVisible(false), 1000)
    }
  }, [copyMessageIsVisible])

  return (
    <div
      className="flex gap-2 bg-white rounded-md items-center transition  duration-1000 little-btn-shadow z-30 relative">
      {
        copyMessageIsVisible && <div className="pl-3 text-[#00c808] font-extrabold text-[14px]">Copied</div>
      }
      <button onClick={handleCopy}
              className={`w-[36px] h-[36px] flex-center bg-white rounded-md group md:hover:border-primary md:hover:border transition transition-color duration-100  ${copyMessageIsVisible && 'hover:border-none'}`}>
        <svg xmlns="http://www.w3.org/2000/svg"
             className={`transition-color duration-100 ${!copyMessageIsVisible && 'md:group-hover:fill-primary'}`}
             viewBox="0 0 18 20" width="18" height="20">

          <g id="copy">
            <path
              d="M2.87105 0C1.28541 0 0 1.22296 0 2.73156V15.6039C0 16.0539 0.383368 16.4186 0.856277 16.4186C1.32919 16.4186 1.71255 16.0539 1.71255 15.6039V2.73156C1.71255 2.12283 2.23123 1.62935 2.87105 1.62935H13.3185C13.7914 1.62935 14.1747 1.26461 14.1747 0.814676C14.1747 0.364743 13.7914 0 13.3185 0H2.87105Z"></path>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2.91468 4.66492C2.91468 3.60625 3.81672 2.74803 4.92945 2.74803H15.9852C17.098 2.74803 18 3.60625 18 4.66492V18.0831C18 19.1418 17.098 20 15.9852 20H4.92945C3.81672 20 2.91468 19.1418 2.91468 18.0831V4.66492ZM4.92945 4.37739H15.9852C16.1521 4.37739 16.2874 4.50612 16.2874 4.66492V18.0831C16.2874 18.2419 16.1521 18.3706 15.9852 18.3706H4.92945C4.76254 18.3706 4.62723 18.2419 4.62723 18.0831V4.66492C4.62723 4.50612 4.76254 4.37739 4.92945 4.37739Z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CopyButton;
