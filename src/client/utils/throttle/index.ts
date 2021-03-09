export default function throttle(callback: (...args: unknown[]) => unknown, wait: number, context = null) {
  let previousCall: number;

  return function wrapper(...args: unknown[]) {
    const currentCall = Date.now();
    if (previousCall === undefined || (currentCall - previousCall) > wait) {
      previousCall = currentCall;
      callback.apply(context, args);
    }
  };
}
