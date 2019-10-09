import { scaleInRules, scaleOutRules } from './transitions';
import { base } from './base';

export const scale = base(
  // common
  {
    backgroundColor: null,
  },

  // enter
  {
    duration: 400,
    easing: 'ease-out',
    opacity: 0,
    zIndex: 1,
    fillMode: 'both',
    scale: 0.7,
    delay: 400,
  },
  scaleInRules,

  //exit
  {
    duration: 400,
    easing: 'ease-in',
    opacity: 0,
    zIndex: 2,
    fillMode: 'both',
    scale: 0.7,
  },
  scaleOutRules,
)