export default function throttle(callback: (...args: unknown[]) => unknown, wait: number, context = null) {
  let isThrottled = false;
  let savedArgs: unknown[] | null;
  let savedThis: unknown;

  function wrapper(...args: unknown[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = context;
      return;
    }

    callback.apply(context, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, wait);
  }

  return wrapper;
}
