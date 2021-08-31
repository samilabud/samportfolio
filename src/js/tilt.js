
// eslint-disable-next-line
import tilt from 'tilt.js';
import $ from 'jquery';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 3,
  });
};

export default initTilt;
