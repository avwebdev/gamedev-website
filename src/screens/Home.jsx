import { Flowbite } from "flowbite-react";

import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

import FLOWBITE_THEME from "../FlowbiteTheme";

function Home() {
  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <NavbarComponent activeRoute="home" />
      <div
        id="main"
        className="main center bg-gradient-to-b from-80% from-french-pass-50 to-french-pass-100 dark:from-cello-950 dark:to-cello-900 text-cello-900 dark:text-french-pass-200"
      >
        <p className="text-6xl font-bold">AV Game Dev</p>
        <hr className="w-108 h-1.5 mx-auto border-0 rounded bg-cello-900 dark:bg-french-pass-200"></hr>
        <p className="text-2xl">Building the Future of Game Development</p>
        <p className="text-xl font-medium">
          Amador Valley High School - Pleasanton, California
        </p>
      </div>
      <div
        id="about"
        className="partition text-cello-900 dark:text-french-pass-200 bg-gradient-to-b from-french-pass-100 to-french-pass-300 dark:from-cello-900 dark:to-cello-700"
      >
        <p className="text-4.5xl font-bold text-center">About the Club</p>
        <hr className="w-88 h-1 mt-2 mb-5 mx-auto border-0 rounded bg-cello-900 dark:bg-french-pass-200"></hr>
        <p className="text-lg w-[80vw] text-center">
          In this club, we teach our club members how to develop games with game
          engines used in the industry, such as Unity and Godot, and allow them
          to collaborate with other people to develop their own projects.
        </p>
        <div className="pt-6">
          <p className="text-3xl font-bold text-center">About the Team</p>
          <hr className="w-72 h-1 mt-2 mb-5 mx-auto border-0 rounded bg-cello-900 dark:bg-french-pass-200"></hr>
          <p className="text-lg w-[60%] m-auto text-center">
            Our club consists of various members who are passionate about game development.
          </p>
          <div className="pt-5 pb-12 flex space-x-6">
            <img className="rounded-lg border-4 border-white" src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" />
            <img className="rounded-lg border-4 border-white" src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" />
            <img className="rounded-lg border-4 border-white" src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" />
          </div>
        </div>
      </div>
      <div
        id="join"
        className="partition text-cello-900 dark:text-french-pass-200 bg-french-pass-300 dark:bg-cello-700"
      >
        <div className="font-bold float-right">
          <p className="text-4.5xl text-center">Join the Club!</p>
          <hr className="w-72 h-1.5 mx-auto mb-4 border-0 rounded bg-cello-900 dark:bg-french-pass-200"></hr>
          <iframe
            className=" h-[70vh] aspect-[7/4]"
            src="https://docs.google.com/presentation/d/e/2PACX-1vSkcsrjaHOt188upodiUFI_mDqWzJLvbsEAmQ_z7bVBXSyvAJdYRJQB3mleDwdfhqp-ZD9C2KDCX0jC/embed"
          ></iframe>
        </div>
      </div>
      <FooterComponent />
    </Flowbite>
  );
}

export default Home;
