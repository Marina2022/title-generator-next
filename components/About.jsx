const About = () => {
  return (
    <div className="mt-[40px] max-sm:mt-[0px]">
      <div className="container">
        <h2 className="text-primary font-extrabold text-[32px] max-sm:text-[26px] mb-8">How it works</h2>

        <div className="flex gap-12 max-md:gap-0 leading-[1.7] pb-6 border-b  border-primary max-md:flex-wrap">
          <div className="w-1/2 max-md:w-full ">
            <p className="mb-5">
              When writing a blog, the title or headline is the most important aspect. This is what’s going to entice
              readers to read or share your post. If the title isn’t good, your article isn’t going anywhere. If you
              need help crafting a great blog title, our title generator service is what you need!
            </p>

            <p className="mb-5">
              This tool will not only help you title an existing blog post but can also help you generate ideas for
              future posts. This could be an invaluable tool for people who make their living writing on the internet.
            </p>

            <p className="mb-5">
              If you are worried about cost, don’t be: our tool is completely free to use as much as you like. The title
              ideas it produces don’t cost anything and are free from any royalty restrictions. Plus, you don’t need to
              give us your email or any other information.
            </p >

            <h3 className="my-7 font-bold">Blog title generator: How does it work?</h3>
            <p className="mb-5">
              This page has a text box. In this box, you’ll want to put the main keyword for your blog post. Similarly,
              if you haven’t written a post yet, using a keyword related to the topic you want to write about would be a
              great idea.
            </p>
          </div>

          <div className="w-1/2 max-md:w-full">
            <p className="mb-5">
              Keep in mind, however, that you must use only Latin characters and cannot use spaces. Once you’ve entered
              a good keyword, hit the GENERATE button. Our server will then generate thousands of blog title ideas for
              you related to that keyword. You’ll see a relatively small list at first, but if you scroll down and hit
              the GENERATE MORE button, you’ll get additional ideas.
            </p>

            <p className="mb-5">

              Next to each title idea will be two buttons: a COPY button and a STAR button. The COPY button will copy
              that title idea so you can paste it somewhere. Meanwhile, the STAR button will save that title to a list.
              You can access the list by hitting the SAVED IDEAS button.
            </p>

            <p className="mb-5">
              You don’t need to worry about losing your saved ideas if you hit the GENERATE MORE button again or even do
              another keyword search. Feel free to jump around!
            </p>

            <p className="mb-5">
              When you have compiled a good list, hit the SAVED IDEAS button and then the DOWNLOAD button. You’ll
              receive a text file with all your saved ideas. Hit the DELETE ALL button to clear your list and start the
              process again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
