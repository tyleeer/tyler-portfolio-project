import { scrollToPage } from "../../utils/index.js";

const HomePage = () => {
  return (
    <section
      id="homePage"
      className="relative w-[100dvw] h-[100dvh] flex items-center p-4 text-black dark:text-white"
    >
      <div className="z-[2] font-mono flex flex-col font-bold text-[2.5rem] ml-10">
        <span>Hey, My name is Siradanai Namtep</span>
        <span>You can call me as Tyler!</span>
        <span className="text-[2rem] text-slate-500">
          I’m aspiring full-stack developer,
        </span>
        <span className="text-[2rem] text-slate-500">
          now focusing on{" "}
          <strong className="text-purple-700 hover:text-purple-500 underline underline-offset-4">
            front-end developer
          </strong>
          .
        </span>
      </div>
      <div className="z-[1] absolute right-[14rem] bottom-8 flex flex-col items-end text-[6rem] text-slate-500">
        <button
          onClick={() => scrollToPage("homePage")}
          className="z-[4] w-fit scale-[190%] hover:text-black dark:hover:text-white"
        >
          home
        </button>
        <button
          onClick={() => scrollToPage("aboutPage")}
          className="z-[3] w-fit scale-[190%] hover:text-black dark:hover:text-white"
        >
          about
        </button>
        <button
          onClick={() => scrollToPage("workPage")}
          className="z-[2] w-fit scale-[190%] hover:text-black dark:hover:text-white"
        >
          portfolio
        </button>
        <button
          onClick={() => scrollToPage("contactPage")}
          className="z-[1] w-fit scale-[190%] hover:text-black dark:hover:text-white"
        >
          contact
        </button>
      </div>
    </section>
  );
};

export default HomePage;
