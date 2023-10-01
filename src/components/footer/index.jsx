import { scrollToPage } from "../../utils/index";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-[100dvw] h-[40dvh] footer footer-center p-10 font-mono font-bold text-[2rem] lowercase border-t-2 border-black dark:border-white text-black dark:text-white">
      <nav className="grid grid-flow-col gap-4">
        <a onClick={() => scrollToPage("homePage")} className="linkToOther">
          Home
        </a>
        <a onClick={() => scrollToPage("aboutPage")} className="linkToOther">
          About
        </a>
        <a onClick={() => scrollToPage("workPage")} className="linkToOther">
          Portfolio
        </a>
        <a onClick={() => scrollToPage("contactPage")} className="linkToOther">
          Contact
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/tyleeer/"
            target="_blank"
            rel="noreferrer"
            className="footer--icon"
          >
            <TbWorld />
          </a>
          <a
            href="https://github.com/tyleeer/"
            target="_blank"
            rel="noreferrer"
            className="footer--icon"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/siradanai-namtep-3035b0269/"
            target="_blank"
            rel="noreferrer"
            className="footer--icon"
          >
            <SiLinkedin />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Siradanai Namtep</p>
      </aside>
    </footer>
  );
};

export default Footer;
