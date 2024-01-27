import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";

import { useGifController } from "gif-tsx";

import { Flowbite, Navbar } from "flowbite-react";

import FLOWBITE_THEME from "../FlowbiteTheme";

function getScrollPercent() {
  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

/**
 * @param {{"home"} | {"about"} | {"join"} | {"tutorials"} | {"games"}} activeRoute
 * @returns {JSX.Element}
 * @constructor
 * @description Navbar component
 * @example
 * <NavbarComponent activeRoute="home" />
 **/
function NavbarComponent({ activeRoute }) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const onScroll = () => setScrollPercent(getScrollPercent());

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const controller = useGifController("/dino.gif", canvasRef);

  let canvasProps, play, pause, renderFrame, restart;

  if (controller.state === "resolved") {
    // `controller` has type `GifControllerResolved`
    ({ canvasProps, play, pause, renderFrame, restart } = controller);

    restart();

    if (!canvasLoaded) {
      setCanvasLoaded(true);
    }

    renderFrame(Math.round(scrollPercent / 4 + 9) % 10);
  }

  useEffect(() => {
    const element = canvasRef.current;
    if (canvasLoaded && element) {
      element.addEventListener("mouseover", play, { passive: true });
      element.addEventListener("mouseleave", pause, { passive: true });

      return () => {
        element.removeEventListener("mouseover", play);
        element.removeEventListener("mouseleave", pause);
      };
    }
  }, [canvasLoaded, canvasRef, pause, play]);

  // handle error state
  if (controller.state === "error") {
    // `controller` has type `GifControllerError`
    console.error(controller.errorMessage);
    return null;
  }

  return (
    <Flowbite theme={{ theme: FLOWBITE_THEME }}>
      <Navbar className="z-50" fluid>
        <Navbar.Brand href="/">
          <canvas
            {...(controller.state === "resolved" ? canvasProps : [])}
            ref={canvasRef}
            className="w-8 h-9 mr-2 hover:scale-110"
          />
          <span className="text-3xl font-semibold">AV Game Dev</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/#main" active={activeRoute === "home"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/#about" active={activeRoute === "about"}>
            About Us
          </Navbar.Link>
          <Navbar.Link href="/#join" active={activeRoute === "join"}>
            Join
          </Navbar.Link>
          <Navbar.Link href="/tutorials" active={activeRoute === "tutorials"}>
            Tutorials
          </Navbar.Link>
          <Navbar.Link href="/games" active={activeRoute === "games"}>
            Games We&apos;ve Made
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}

NavbarComponent.propTypes = {
  activeRoute: PropTypes.string.isRequired,
};

export default NavbarComponent;
