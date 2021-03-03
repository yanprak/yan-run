/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  ElementWithFullScreenProps,
  DocumentWithFullscreenExitFunctions,
  ElementWithBrowsersFullScreenFunctions,
} from './types';

function isFullscreenInactive(): boolean {
  const doc = document as Document & ElementWithFullScreenProps;
  return !doc.fullscreenElement
    && !doc.mozFullScreenElement
    && !doc.webkitFullscreenElement
    && !doc.msFullscreenElement;
}

export function activateFullscreen(el: HTMLElement): void {
  const element = el as HTMLElement & ElementWithBrowsersFullScreenFunctions;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

export function deactivateFullscreen(): void {
  const doc = document as Document & DocumentWithFullscreenExitFunctions;
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  }
}

export function toggleFullscreen(element = document.documentElement): void {
  return isFullscreenInactive() ? activateFullscreen(element) : deactivateFullscreen();
}
