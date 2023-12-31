import React, { useState, useEffect, useRef } from "react";

import { useGifController } from "gif-tsx";

import { Flowbite, Navbar, Footer } from "flowbite-react";

import { TbMail } from "react-icons/tb";
import { SiDiscord, SiInstagram, SiUnity, SiGodotengine } from "react-icons/si";

import FLOWBITE_THEME from "../FlowbiteTheme";


function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}


function Home() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPercent(getScrollPercent());
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const canvasRef = useRef();
  const controller = useGifController("/dino.gif", canvasRef);

  // handle error state
  if (controller.state === "error") {
    // `controller` has type `GifControllerError`
    console.error(controller.errorMessage);
    return null;
  }

  let canvasProps, renderFrame;

  if (controller.state === "resolved") {
    // `controller` has type `GifControllerResolved`
    ({ canvasProps, renderFrame } = controller);

    renderFrame(Math.round(scrollPercent / 4 + 9) % 10);
  }

  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <canvas {...(controller.state === "resolved" ? canvasProps: [])} ref={controller.state === "resolved" ? canvasRef : undefined} className="w-8 h-9 mr-2" />
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
