import {MouseEventHandler} from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const RemoveButton = ({onClick}:Props) => {
  return (
    <button onClick={onClick}
            className="w-[36px] h-[36px] flex-center bg-white rounded-md group hover:border-primary hover:border transition transition-color duration-100 little-btn-shadow">
      <svg xmlns="http://www.w3.org/2000/svg"
           className={`transition-color duration-100 group-hover:fill-primary`}
           fill="#343D43"
           viewBox="0 0 10 10" width="10" height="10">

          <path id="close" fillRule="evenodd" clipRule="evenodd"
                d="M9.77207 1.32846C10.076 1.02455 10.076 0.53183 9.77207 0.227927C9.46817 -0.0759757 8.97545 -0.0759757 8.67155 0.227927L5 3.89947L1.32846 0.227928C1.02455 -0.0759746 0.53183 -0.0759746 0.227927 0.227928C-0.0759757 0.531831 -0.0759757 1.02455 0.227927 1.32846L3.89947 5L0.228163 8.67131C-0.0757393 8.97521 -0.0757393 9.46793 0.228163 9.77184C0.532066 10.0757 1.02479 10.0757 1.32869 9.77184L5 6.10053L8.67131 9.77184C8.97521 10.0757 9.46793 10.0757 9.77184 9.77184C10.0757 9.46794 10.0757 8.97521 9.77184 8.67131L6.10053 5L9.77207 1.32846Z"></path>
      </svg>
    </button>
  );
};

export default RemoveButton;
