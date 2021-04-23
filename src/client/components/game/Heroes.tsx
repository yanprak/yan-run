import React, { useCallback } from 'react';
import { useAudio, useHero } from '../../hooks';
import heroSkin from './playerTextures';
import clickSound from './audio/click.mp3';

type HeroSkin = {
  runImageSprite: string,
  jumpImageSprite: string,
  fallImageSprite: string,
  jumpDoubleImageSprite: string,
};

const characterClassName = (isActive: boolean) => {
  const style = isActive ? 'game_active' : '';
  return `game__character margin_s-2 ${style}`;
};

const Hero = (id: number, skin: HeroSkin) => {
  const { currentHero, handleHero } = useHero();
  const [, toggleSound] = useAudio(clickSound);
  const handleClick = useCallback(() => {
    toggleSound();
    handleHero(id);
  }, [id, handleHero, toggleSound]);

  return (
    <div
      key={id}
      onClick={handleClick}
      className={characterClassName(currentHero === id)}
    >
      <img className="game__img" src={skin.fallImageSprite} alt="skin" />
    </div>
  );
};

const Heroes = () => (
  <div className="container container_center-items">
    { heroSkin.map((hero:HeroSkin, index: number) => Hero(index, hero)) }
  </div>
);

export default Heroes;
