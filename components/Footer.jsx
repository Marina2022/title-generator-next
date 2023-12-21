import Socials from "@/components/ui/Socials.jsx";

const Footer = () => {
  return (
    <div className="py-14">
      <div className="container">
        <h2 className="mb-[18px] text-[18px] font-extrabold text-center">Enjoy Generator? Share it!</h2>
        <Socials />
        <div className="text-center mt-10 text-[14px]">© SIA Webby&nbsp;&nbsp;|&nbsp;&nbsp; <a href="/" className="text-primary font-extrabold hover:border-b hover:border-primary " >Terms and Privacy Policy</a></div>

      </div>
    </div>
  );
};

export default Footer;
