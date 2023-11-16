import { Flowbite, Navbar, Footer } from "flowbite-react";
import { useGlitch } from "react-powerglitch";
import { SiDiscord, SiInstagram, SiGmail, SiUnity, SiGodotengine } from "react-icons/si";
import { TbMail } from "react-icons/tb";

function App() {
  const glitch = useGlitch({
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 2000,
    },
    "glitchTimeSpan": false,
    "shake": {
      "velocity": 1,
      "amplitudeX": 0.01,
      "amplitudeY": 0.01
    },
    "slice": {
      "count": 3,
      "velocity": 20,
      "minHeight": 0.01,
      "maxHeight": 0.3,
      // "hueRotate": true
    },
    "pulse": false
  });

  const customNavbarTheme = {
    navbar: {
      root: {
        base: "bg-[#7ba27b] px-2 py-3 sm:px-3",
      },
      link: {
        base: "text-[#e9ffb2] text-[1.05rem] rounded-full bg-[#397b6c] py-2 px-5",
        active: {
          on: "",
          off: ""
        }
      },
      brand: {
        base: "flex items-center text-[#e9ffb2]"
      },
    },
    footer: {
      brand: {
        base: "mb-4 flex items-center sm:mb-0",
        img: "mr-3 h-8",
        span: "self-center whitespace-nowrap text-[2.2rem] font-semibold !text-[#e9ffb2]"
      }
    }
  };

  return (
    <Flowbite theme={{ theme: customNavbarTheme }}>
      <div className="flex flex-col h-screen text-[#e9ffb2]">
        <Navbar fluid>
          <Navbar.Brand href="/">
            <img src="/logo.png" className="w-9 h-9 mr-2" />
            <span className="text-3xl font-semibold">
              AV Game Dev
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/#about">
              About Us
            </Navbar.Link>
            <Navbar.Link href="/#join">
              Join
            </Navbar.Link>
            <Navbar.Link href="/tutorials">
              Tutorials
            </Navbar.Link>
            <Navbar.Link href="/games">
              Games We've Made
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <div className="main center bg-[#253224]">
          <p className="text-6xl">AV Game Dev</p>
          <hr className="w-96 h-2 mx-auto border-0 rounded bg-[#e9ffb2]"></hr>
          <p className="text-2xl">Building the Future of Gaming</p>
        </div>
      </div>
      <div id="about" className="main text-[#e9ffb2] bg-gradient-to-b from-[#9bae75] to-[#449869]">
        <p className="text-[2.6rem]">Welcome to AV Game Dev</p>
        <hr className="w-[33rem] h-1 mt-2 mb-5 mx-auto border-0 rounded bg-[#e9ffb2]"></hr>
        <p className="text-lg w-[44rem] text-center">In this club, we teach our club members how to develop their own games in game engines used in the industry, such as Unity and Godot, and allow them to collaborate with other people to develop their own projects.</p>
      </div>
      <div id="join" className="flex flex-col h-screen text-[#e9ffb2] bg-[#449869]">
      </div>
      <Footer className="!bg-[#2f415b]">
        <div className="w-full bg-gray-700 px-4 py-6 center">
          <Footer.Brand href="#" src="/logo.png"
            alt="Av Game Dev Logo" name="AV Game Dev" className="!text-[#e9ffb2]" />
          <div className="mt-0 flex space-x-5">
            <Footer.Icon href="#" icon={() => <SiDiscord color="white" fontSize="2rem" />} />
            <Footer.Icon href="#" icon={() => <SiInstagram color="white" fontSize="2rem" />} />
            <Footer.Icon href="mailto:test@example.com" icon={() => <TbMail color="white" fontSize="2.2rem" />} />
            <Footer.Icon href="https://unity.com" icon={() => <SiUnity color="white" fontSize="2rem" />} />
            <Footer.Icon href="https://godotengine.org" icon={() => <SiGodotengine color="white" fontSize="2rem" />} />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}

export default App;
