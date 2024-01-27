import { Flowbite, Footer } from "flowbite-react";

import { TbMail } from "react-icons/tb";
import { SiDiscord, SiInstagram, SiUnity, SiGodotengine } from "react-icons/si";

import FLOWBITE_THEME from "../FlowbiteTheme";

/**
 * @returns {JSX.Element}
 * @constructor
 * @description Footer component
 **/
function FooterComponent() {
  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <Footer>
        <div className="w-full bg-gray-700 px-4 py-6 center">
          <Footer.Brand
            href="#"
            src="/logo.png"
            alt="AV Game Dev Logo"
            name="AV Game Dev"
            className="!text-[#e9ffb2]"
          />
          <div className="text-lg flex items-center text-gray-200">
            <img
              align="middle"
              className="w-8 h-8 inline"
              src="/webdev_logo.png"
            />
            <span>&nbsp;Created by AV Web Dev</span>
          </div>
          <div className="mt-0 flex space-x-5">
            <Footer.Icon
              href="https://discord.com/invite/n3sShZe5g4"
              icon={() => <SiDiscord color="white" fontSize="2rem" />}
            />
            <Footer.Icon
              href="https://instagram.com/avhs_gd"
              icon={() => <SiInstagram color="white" fontSize="2rem" />}
            />
            <Footer.Icon
              href="mailto:test@example.com"
              icon={() => <TbMail color="white" fontSize="2.2rem" />}
            />
            <Footer.Icon
              href="https://unity.com"
              icon={() => <SiUnity color="white" fontSize="2rem" />}
            />
            <Footer.Icon
              href="https://godotengine.org"
              icon={() => <SiGodotengine color="white" fontSize="2rem" />}
            />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}

export default FooterComponent;
