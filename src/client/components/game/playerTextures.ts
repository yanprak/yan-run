import runImageFrog from './textures/sprite/frog/run.png';
import jumpImageFrog from './textures/sprite/frog/jump.png';
import fallImageFrog from './textures/sprite/frog/fall.png';

import runImageVm from './textures/sprite/vm/run.png';
import jumpImageVm from './textures/sprite/vm/jump.png';
import fallImageVm from './textures/sprite/vm/fall.png';

const frog = {
  runImageSprite: runImageFrog,
  jumpImageSprite: jumpImageFrog,
  fallImageSprite: fallImageFrog,
};

const vm = {
  runImageSprite: runImageVm,
  jumpImageSprite: jumpImageVm,
  fallImageSprite: fallImageVm,
};

const characterSkin = [
  frog,
  vm,
];

export default characterSkin;
