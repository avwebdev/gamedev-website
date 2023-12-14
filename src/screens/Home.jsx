// import { useGlitch } from "react-powerglitch";
import { Flowbite, Navbar, Footer } from "flowbite-react";

import { TbMail } from "react-icons/tb";
import { SiDiscord, SiInstagram, SiUnity, SiGodotengine } from "react-icons/si";

function Home() {
  // const glitch = useGlitch({
  //   "playMode": "always",
  //   "createContainers": true,
  //   "hideOverflow": false,
  //   "timing": {
  //     "duration": 2000,
  //   },
  //   "glitchTimeSpan": false,
  //   "shake": {
  //     "velocity": 1,
  //     "amplitudeX": 0.01,
  //     "amplitudeY": 0.01
  //   },
  //   "slice": {
  //     "count": 3,
  //     "velocity": 20,
  //     "minHeight": 0.01,
  //     "maxHeight": 0.3,
  //   },
  //   "pulse": false
  // });

  const customFlowbiteTheme = {
    navbar: {
      root: {
        base: "backdrop-blur bg-gradient-to-b from-[#7da279] to-[#7da2794A] px-2 py-3 sm:px-3 fixed top-0 inset-x-0 shadow-xl",
      },
      collapse: {
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-5 md:text-sm md:font-medium"
      },
      link: {
        base: "font-semibold text-[#e9ffb2] text-[1.25rem] rounded-full px-5 py-2 inline-block transition duration-300 hover:scale-[1.1] hover:bg-[#55854a]",
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
    <Flowbite theme={{ theme: customFlowbiteTheme }}>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <img src="/logo.png" className="w-9 h-9 mr-2" />
          <span className="text-3xl font-semibold">
            AV Game Dev
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/#main" active>
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
      <div id="main" className="main center bg-[#263223] text-[#e7fdb0]">
        <p className="text-6xl">AV Game Dev</p>
        <hr className="w-96 h-1.5 mx-auto border-0 rounded bg-[#e9ffb2]"></hr>
        <p className="text-2xl">Building the Future of Gaming</p>
      </div>
      <div id="about" className="partition text-[#e9ffb2] bg-gradient-to-b from-[#9bae75] to-[#449869]">
        <p className="text-4.5xl">About the Club</p>
        <hr className="w-96 h-1 mt-2 mb-5 mx-auto border-0 rounded bg-[#e9ffb2]"></hr>
        <p className="text-lg w-176 text-center">In this club, we teach our club members how to develop games with game engines used in the industry, such as Unity and Godot, and allow them to collaborate with other people to develop their own projects.</p>
      </div>
      <div id="join" className="partition text-[#e9ffb2] bg-[#449869]">
        <div className="float-right">
          <p className="text-4.5xl">Join the Club!</p>
          <hr className="w-72 h-1.5 mx-auto border-0 rounded bg-[#e9ffb2]"></hr>
        </div>
      </div>
      <Footer className="!bg-[#2f415b]">
        <div className="w-full bg-gray-700 px-4 py-6 center">
          <Footer.Brand href="#" src="/logo.png"
            alt="Av Game Dev Logo" name="AV Game Dev" className="!text-[#e9ffb2]" />
          <div className="mt-0 flex space-x-5">
            <Footer.Icon href="https://discord.com/invite/n3sShZe5g4" icon={() => <SiDiscord color="white" fontSize="2rem" />} />
            <Footer.Icon href="https://instagram.com/avhs_gd" icon={() => <SiInstagram color="white" fontSize="2rem" />} />
            <Footer.Icon href="mailto:test@example.com" icon={() => <TbMail color="white" fontSize="2.2rem" />} />
            <Footer.Icon href="https://unity.com" icon={() => <SiUnity color="white" fontSize="2rem" />} />
            <Footer.Icon href="https://godotengine.org" icon={() => <SiGodotengine color="white" fontSize="2rem" />} />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}

export default Home;
