import { baseOut } from './base';

import { InjectStyle } from '../../utils';

export default ({
  direction='left',
  duration=700,
  easing='ease-in',
  opacity=0.3,
  replaceBackground=null,
  zIndex=2,
  angle=90,
  fillMode='both',
}={}) => {

  if (angle > 90) angle = 90;
  else if (angle < 0) angle = 0;

  const config = {
    left: ['100% 50%', `translateX(-100%) rotateY(${angle}deg)`],
    right: ['0% 50%', `translateX(100%) rotateY(${-angle}deg)`],
    top: ['50% 100%', `translateY(-100%) rotateX(${-angle}deg)`],
    bottom: ['50% 0%', `translateY(100%) rotateX(${angle}deg)`],
  }

  const animationName = `${direction}ReactTigerTransitionRoomOut`;
  const transformOrigin = config[direction][0];
  const animationCss = `${animationName} ${duration}ms ${fillMode} ${easing}`;

  const style = `
  .react-tiger-transition-room-out-${direction} {
    -webkit-transform-origin: ${transformOrigin};
    -ms-transform-origin: ${transformOrigin};
    transform-origin: ${transformOrigin};
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
    z-index: ${zIndex};
    opacity: 1;
  }
  `

  const transform = config[direction][1]

  const animation = `
    @-webkit-keyframes ${animationName} {
      to {
        opacity: ${opacity};
        -webkit-transform: ${transform};
        transform: ${transform};
      }
    }
    @keyframes ${animationName} {
      to {
        opacity: ${opacity};
        -webkit-transform: ${transform};
        transform: ${transform};
      }
    }
  `

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  }

  return baseOut({
    rules: rules,
    replaceBackground: replaceBackground,
    className: `react-tiger-transition-room-out-${direction}`,
  })
}