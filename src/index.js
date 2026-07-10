import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initNav from "./scripts/nav";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initNav();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
