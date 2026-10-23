import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initNav from "./scripts/nav";
import initProjectFilter from "./scripts/projectFilter";
import initDeepLink from "./scripts/deepLink";
import initCarousels from "./scripts/carousel";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initNav();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initProjectFilter();
initCarousels();
initDeepLink();
