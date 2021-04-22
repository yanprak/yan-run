import React from 'react';
import { useHero } from '../../hooks';
import heroSkin from './playerTextures';

type HeroSkin = {
  runImageSprite: string,
  jumpImageSprite: string,
  fallImageSprite: string,
  jumpDoubleImageSprite: string,
};

const chatacterClassName = (isActive: boolean) => {
  const style = isActive ? 'game_active' : '';
  return `game__character margin_s-2 ${style}`;
};

const Hero = (id: number, skin: HeroSkin) => {
  const { currentHero, handleHero } = useHero();
  return (
    <div
      key={id}
      onClick={() => handleHero(id)}
      className={chatacterClassName(currentHero === id)}
    >
      <img className="game__img" src={skin.fallImageSprite} />
    </div>
  );
};

const Heroes = () => (
  <div className="container container_center-items">
    { heroSkin.map((hero:HeroSkin, index: number) => Hero(index, hero)) }
  </div>
);

export default Heroes;
