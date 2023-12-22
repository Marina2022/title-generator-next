import {ChangeEventHandler} from 'react';

type Props = {
  className: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string
}

const Input = ({className, placeholder, onChange, value}:Props) => {
  return (
    <input value={value} onChange={onChange} className={`rounded-xl border border-[1px] border-primary bg-white h-[44px] p-4 outline-primary ${className}`} placeholder={placeholder} />
  );
};

export default Input;
