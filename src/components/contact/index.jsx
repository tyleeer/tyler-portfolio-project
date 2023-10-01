const ContactPage = () => {
  return (
    <section
      id="contactPage"
      className="w-[100dvw] h-[100dvh] px-8 py-4 flex flex-col items-center text-black dark:text-white"
    >
      <h2 className="text-[8rem] text-purple-500">send me a message!</h2>
      <p className="text-[2rem] font-mono text-center translate-y-[-2rem]">
        Feel free to contact me at{" "}
        <a href="mailto:siradanai.nam@gmail.com" className="linkToOther">
          siradanai.nam@gmail.com
        </a>{" "}
        or +66(0)6 2509 2982.
        <br />
        Let's connect and collaborate!
      </p>
      <form className="grid grid-cols-2 mt-5 gap-4 font-mono">
        <div className="flex flex-col gap-2 focus-within:text-purple-400">
          <label htmlFor="name" className="text-[1.5rem] font-bold">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-4 bg-purple-900 text-white placeholder:text-white"
          ></input>
        </div>
        <div className="flex flex-col gap-2 focus-within:text-purple-400">
          <label htmlFor="email" className="text-[1.5rem] font-bold">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-4 bg-purple-900 text-white placeholder:text-white"
          ></input>
        </div>
        <div className="col-span-2 flex flex-col gap-2 focus-within:text-purple-400">
          <label htmlFor="message" className="text-[1.5rem] font-bold">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="100"
            className="p-4 bg-purple-900 text-white placeholder:text-white"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-active btn-ghost col-span-2 lowercase text-[1.5rem] h-[60px]"
        >
          submit your message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
