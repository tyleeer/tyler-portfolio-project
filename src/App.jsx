import Header from "./components/header/index";
import HomePage from "./components/home/index";
import AboutPage from "./components/about";
import "./App.css";
import WorkPage from "./components/work";
import ContactPage from "./components/contact";
import Footer from "./components/footer/index";
import { navHanddler } from "./utils/index";

function App() {
  return (
    <div
      id="container"
      onScroll={navHanddler}
      className="dark w-[100dvw] h-[100dvh] overflow-x-hidden overflow-y-auto scroll-smooth"
    >
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <WorkPage />
        <ContactPage />
      </main>
      <Footer />
      <div
        id="background"
        className="hidden enlarge z-[-1] w-[100dvw] aspect-square fixed top-0"
      ></div>
      <div
        id="test"
        className="testEnlarge z-[-1] w-[50px] aspect-square fixed top-2 right-7 rounded-full"
      ></div>
    </div>
  );
}

export default App;
