const Logo = () => {
  return (
    <div className="relative uppercase text-[18px] uppercase font-extrabold flex justify-center">
      <span className="border-r-0 rounded-l-2xl pl-2 border-[#a1cafb] border-4 block">        Title
      </span>
      <div className="w-[20px] logo inline-block">
        <span className="bg-[#4395f7] w-[4px] h-full block mx-auto before:content-0 " >
        </span>
      </div>
      <span className="border-l-0 rounded-r-2xl  border-[#a1cafb] border-4 block pr-2">
        generator
      </span>
    </div>
  )
}

export default Logo;
