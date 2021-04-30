import runImageFrog from './textures/sprite/frog/run.png';
import jumpImageFrog from './textures/sprite/frog/jump.png';
import fallImageFrog from './textures/sprite/frog/fall.png';
import jumpDoubleImageFrog from './textures/sprite/frog/doubleJump.png';

import runImageVm from './textures/sprite/vm/run.png';
import jumpImageVm from './textures/sprite/vm/jump.png';
import fallImageVm from './textures/sprite/vm/fall.png';
import jumpDoubleImageVm from './textures/sprite/vm/doubleJump.png';

import runImageMask from './textures/sprite/mask/run.png';
import jumpImageMask from './textures/sprite/mask/jump.png';
import fallImageMask from './textures/sprite/mask/fall.png';
import jumpDoubleImageMask from './textures/sprite/mask/doubleJump.png';

const frog = {
  runImageSprite: runImageFrog,
  jumpImageSprite: jumpImageFrog,
  fallImageSprite: fallImageFrog,
  jumpDoubleImageSprite: jumpDoubleImageFrog,
};

const vm = {
  runImageSprite: runImageVm,
  jumpImageSprite: jumpImageVm,
  fallImageSprite: fallImageVm,
  jumpDoubleImageSprite: jumpDoubleImageVm,
};

const mask = {
  runImageSprite: runImageMask,
  jumpImageSprite: jumpImageMask,
  fallImageSprite: fallImageMask,
  jumpDoubleImageSprite: jumpDoubleImageMask,
};

const heroSkin = [
  frog,
  vm,
  mask,
];

export default heroSkin;
