function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/assets/sw/sw.js')
        .then(registration => {
          window.console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(error => {
          window.console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

startServiceWorker();
