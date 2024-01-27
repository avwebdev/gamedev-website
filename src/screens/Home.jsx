import { Flowbite, Carousel } from "flowbite-react";

import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

import FLOWBITE_THEME from "../FlowbiteTheme";

function Home() {
  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <NavbarComponent activeRoute="home" />
      <div
        id="main"
        className="relative main center text-cello-900 dark:text-french-pass-200"
      >
        <div className="absolute top-0 left-0 bg-slate-950 w-full h-full -z-10 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-20">
          <Carousel leftControl={"\u200b"} rightControl={"\u200b"} indicators={false}>
            <img
              className="object-cover h-full w-full"
              src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
              alt="Placeholder 1"
            />
            <img
              className="object-cover h-full w-full"
              src="https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder 2"
            />
            <img
              className="object-cover h-full w-full"
              src="https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder 3"
            />
          </Carousel>
        </div>
        <p className="text-7xl font-bold leading-[0.7]">AV Game Dev</p>
        <hr className="w-120 h-1.5 mx-auto border-0 rounded bg-cello-900 dark:bg-french-pass-200"></hr>
        <p className="text-1.5xl leading-3">
          Building the Future of Game Development
        </p>
        <p className="text-lg leading-3 font-medium">
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
            Our club consists of various members who are passionate about game
            development.
          </p>
          <div className="pt-5 pb-12 flex space-x-6">
            <img
              className="rounded-lg border-4 border-white"
              src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg"
            />
            <img
              className="rounded-lg border-4 border-white"
              src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg"
            />
            <img
              className="rounded-lg border-4 border-white"
              src="https://i.pinimg.com/236x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg"
            />
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
