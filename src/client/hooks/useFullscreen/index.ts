import { useState, useLayoutEffect } from 'react';
import { toggleFullscreen } from '../../utils/fullscreen';
import { ElementWithFullScreenProps } from '../../utils/fullscreen/types';

function getBrowserFullscreenElementProp() {
  const doc = document as Document & ElementWithFullScreenProps;
  if (typeof doc.fullscreenElement !== 'undefined') {
    return 'fullscreenElement';
  } if (typeof doc.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement';
  } if (typeof doc.msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement';
  } if (typeof doc.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement';
  }
  throw new Error('fullscreenElement is not supported by this browser');
}

export default function useFullscreenStatus() {
  const doc = document as Document & ElementWithFullScreenProps;
  const [isFullscreen, setIsFullscreen] = useState(
    doc[getBrowserFullscreenElementProp()] !== null,
  );

  const setFullscreen = (element = document.documentElement) => {
    toggleFullscreen(element);
    setIsFullscreen(!isFullscreen);
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () => setIsFullscreen(doc[getBrowserFullscreenElementProp()] !== null);

    return () => {
      document.onfullscreenchange = null;
    };
  });

  return [isFullscreen, setFullscreen] as const;
}
