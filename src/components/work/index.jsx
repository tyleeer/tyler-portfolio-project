import weatherPreview from "../../assets/work/weather.png";
import covidPreview from "../../assets/work/covid19.png";
import { SiGithub } from "react-icons/si";

const WorkPage = () => {
  return (
    <section
      id="workPage"
      className="w-[100dvw] h-[100dvh] flex flex-col items-center p-8 text-black dark:text-white"
    >
      <h2 className="text-[8rem] self-end">portfolio</h2>
      <div className="w-[90dvw] h-[70dvh] carousel carousel-end gap-2 rounded-box font-mono text-white">
        <div className="carousel-item card h-full w-[85dvw] bg-base-100 shadow-xl">
          <figure>
            <img
              src={weatherPreview}
              alt="weatherPreview"
              className="bg-contain"
            />
          </figure>
          <div className="card-body h-[25%]">
            <h2 className="card-title translate-y-[-1rem]">
              Thailand Weather App project
              <div className="badge badge-primary">Frontend</div>
            </h2>
            <p className="translate-y-[-1rem]">
              Thailand Weather App. Developed using React, TypeScript, Tailwind
              CSS, and daisyUI. Front-end Project.
            </p>
            <div className="flex gap-2 ml-auto translate-y-[-5rem]">
              <a
                href="https://github.com/tyleeer/thailand-weather-tracker"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-fit text-[1.5rem]"
              >
                <SiGithub />
              </a>
              <a
                href="https://tyleeer.github.io/thailand-weather-tracker/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-fit text-[1.5rem]"
              >
                Demo
              </a>
            </div>
            <div className="card-actions justify-end translate-y-[-4.5rem]">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Typeescript</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">Responsive</div>
              <div className="badge badge-outline">REST APIs</div>
            </div>
          </div>
        </div>
        <div className="carousel-item card h-full w-[85dvw] bg-base-100 shadow-xl">
          <figure>
            <img
              src={covidPreview}
              alt="weatherPreview"
              className="bg-contain"
            />
          </figure>
          <div className="card-body h-[25%]">
            <h2 className="card-title translate-y-[-1rem]">
              Covid-19 Stats
              <div className="badge badge-primary">Frontend</div>
            </h2>
            <p className="translate-y-[-1rem]">
              COVID-19 Statistics Project. Developed using React, TypeScript,
              Tailwind CSS, and daisyUI.
            </p>
            <div className="flex gap-2 ml-auto translate-y-[-5rem]">
              <a
                href="https://github.com/tyleeer/covid-19-stats-project"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-fit text-[1.5rem]"
              >
                <SiGithub />
              </a>
              <a
                href="https://covid-19-stats-project-qnel.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-fit text-[1.5rem]"
              >
                Demo
              </a>
            </div>
            <div className="card-actions justify-end translate-y-[-4.5rem]">
              <div className="badge badge-outline">React</div>
              <div className="badge badge-outline">Typeescript</div>
              <div className="badge badge-outline">Tailwind CSS</div>
              <div className="badge badge-outline">Responsive</div>
              <div className="badge badge-outline">REST APIs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
