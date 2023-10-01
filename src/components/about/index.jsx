import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoNodejs } from "react-icons/bi";
import {
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiGithub,
  SiExpress,
  SiDocker,
  SiPostman,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const AboutPage = () => {
  return (
    <section
      id="aboutPage"
      className="w-[100dvw] h-[100dvh] py-4 px-8 text-black dark:text-white"
    >
      <h2 className="text-[8rem] text-right">about me</h2>
      <div className="flex justify-between">
        <article className="w-[50dvw] text-[1.5rem] flex flex-col gap-4 translate-y-[-4rem]">
          <h3 className="text-[3rem]">technical skills</h3>
          <div className="grid grid-cols-3 gap-4 font-mono">
            <div className="skill--container">
              <AiFillHtml5 className="skill--icon" />
              <label>html</label>
            </div>
            <div className="skill--container">
              <SiCss3 className="skill--icon" />
              <label>css</label>
            </div>
            <div className="skill--container">
              <SiJavascript className="skill--icon" />
              <label>javascript</label>
            </div>
            <div className="skill--container">
              <SiTypescript className="skill--icon" />
              <label>typescript</label>
            </div>
            <div className="skill--container">
              <SiReact className="skill--icon" />
              <label>react</label>
            </div>
            <div className="skill--container">
              <SiTailwindcss className="skill--icon" />
              <label>tailwind</label>
            </div>
            <div className="skill--container font-bold">
              <span>zustand</span>
              <span className="text-[1rem]">(state-management)</span>
            </div>
            <div className="skill--container">
              <BiLogoNodejs className="skill--icon" />
              <label>nodejs</label>
            </div>
            <div className="skill--container">
              <SiExpress className="skill--icon" />
              <label>express</label>
            </div>
            <div className="skill--container">
              <SiDocker className="skill--icon" />
              <label>docker</label>
            </div>
            <div className="skill--container">
              <SiPostman className="skill--icon" />
              <label>postman</label>
            </div>
            <div className="skill--container">
              <SiGit className="skill--icon" />
              <label>git</label>
            </div>
            <div className="skill--container col-span-3">
              <SiGithub className="skill--icon" />
              <label>github</label>
            </div>
          </div>
        </article>
        <article className="font-mono text-[1.5rem] w-[40dvw] flex flex-col gap-4 text-justify translate-y-[2rem]">
          <p>
            I've made a significant career change from the healthcare industry,
            where I worked as a <strong>radiologic technologist</strong>, to
            pursue a role as a <strong className="uppercase">developer</strong>{" "}
            in the tech industry. This choice arises from my desire to break
            away from the routine of the hospital environment. As a developer, I
            look forward to embracing fresh challenges daily.
          </p>
          <p>
            Moreover, this career change aligns with my dream of having the
            freedom to{" "}
            <strong className="uppercase text-purple-500 hover:underline hover:underline-offset-4">
              work from anywhere
            </strong>{" "}
            in the world as a developer.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
