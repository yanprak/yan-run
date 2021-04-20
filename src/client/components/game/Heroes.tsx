import React from 'react';
import { useHero } from '../../hooks';
import frogImg from './textures/sprite/frog/jump.png';
import vmImg from './textures/sprite/vm/jump.png';
import maskImg from './textures/sprite/mask/jump.png';

type HeroProps = {
  id: number,
  name: string,
  pathImg: string,
};

const chatacterClassName = (isActive: boolean) => {
  const style = isActive ? 'game_active' : '';
  return `game__character margin_s-2 ${style}`;
};

const Hero = (props: HeroProps) => {
  const { id, name, pathImg } = props;
  const { currentHero, handlerHero } = useHero();
  return (
    <div
      onClick={() => handlerHero(id)}
      className={chatacterClassName(currentHero === id)}
    >
      <img className="game__img" src={pathImg} alt={name} />
    </div>
  );
};

const heroList: HeroProps[] = [
  { id: 0, name: 'Frog', pathImg: frogImg },
  { id: 1, name: 'VirtualMan', pathImg: vmImg },
  { id: 2, name: 'Mask', pathImg: maskImg },
];

const Heroes = () => (
  <div className="container container_center-items">
    { heroList.map(hero => Hero(hero)) }
  </div>
);

export default Heroes;
