const Input = ({className, placeholder, onChange, value}) => {
  return (
    <input value={value} onChange={onChange} className={`rounded-xl border border-[1px] border-primary bg-white h-[44px] p-4 outline-primary ${className}`} placeholder={placeholder} />
  );
};

export default Input;
