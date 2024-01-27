import { Flowbite } from "flowbite-react";

import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

import FLOWBITE_THEME from "../FlowbiteTheme";

function Tutorials() {
  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <NavbarComponent activeRoute="tutorials" />
      <div
        id="main"
        className="main center bg-gradient-to-b from-80% from-french-pass-50 to-french-pass-100 dark:from-cello-950 dark:to-cello-900 text-cello-900 dark:text-french-pass-200"
       />
      <FooterComponent />
    </Flowbite>
  );
}

export default Tutorials;
