const Textarea = ({className, placeholder, onChange, value}) => {
  return (
    <textarea value={value} onChange={onChange} placeholder={placeholder}
      className={`rounded-xl outline outline-[1px] outline-primary bg-white h-full min-h-[100px] resize-none px-4 py-2 focus:outline-[2px] ${className}`}>
    </textarea>
  );
};

export default Textarea;
