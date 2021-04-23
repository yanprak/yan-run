export default class Sound {
  private readonly sound: HTMLAudioElement;
  play: () => void;
  pause: () => void;
  stop: () => void;

  constructor(src: string) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.play = () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.sound.play();
    };
    this.pause = () => {
      this.sound.pause();
    };
    this.stop = () => {
      this.sound.pause();
      this.sound.currentTime = 0;
    };
  }
}
