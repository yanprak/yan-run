export type ElementWithBrowsersFullScreenFunctions = {
  mozRequestFullScreen(): Promise<void>;
  webkitRequestFullscreen(): Promise<void>;
  msRequestFullscreen(): Promise<void>;
} & Element;

export type DocumentWithFullscreenExitFunctions = {
  mozCancelFullScreen(): Promise<void>;
  webkitExitFullscreen(): Promise<void>;
  msExitFullscreen(): Promise<void>;
} & Document;

export type ElementWithFullScreenProps = {
  mozFullScreenElement?: ElementWithBrowsersFullScreenFunctions;
  webkitFullscreenElement?: ElementWithBrowsersFullScreenFunctions;
  msFullscreenElement?: ElementWithBrowsersFullScreenFunctions;
};
