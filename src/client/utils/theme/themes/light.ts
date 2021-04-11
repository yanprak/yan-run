const style = {
  // default
  '--default-bg-color': '#ffffff',
  '--default-bg-hover-color': '#eaeaea',
  '--default-color': '#585858',
  '--default-border-color': '#dcdcdc',
  // primary
  '--primary-bg-color': '#003fe0',
  '--primary-bg-hover-color': '#0033b8',
  '--primary-color': '#ffffff',
  // secondary
  '--secondary-bg-color': '#eaeaea',
  '--secondary-bg-hover-color': '#dcdcdc',
  '--secondary-color': '#003fe0',
  // success
  '--success-bg-color': '#147c4a',
  '--success-bg-hover-color': '#18995b',
  '--success-color': '#fff',
  // error
  '--error-color': '#ff6c6c',
  // ghost
  '--ghost-bg-color': 'transparent',
  '--ghost-bg-hover-color': 'rgba(255, 255, 255, 0.8)',
  '--ghost-color': '#003fe0',
  // successInvert
  '--successInvert-bg-color': 'transparent',
  '--successInvert-bg-hover-color': 'rgba(255, 255, 255, 0.8)',
  '--successInvert-color': '#8cf38c',
  // dark
  '--dark-bg-color': '#dcdcdc',
  // focus
  '--focus-border-color': '#003fe0',
  // transparent dark
  '--dark-overflow-bg-color': 'rgb(226,226,226)',
  '--avatar-color': '#ffffff',
};

const light = {
  id: 1,
  name: 'light',
  hidden: false,
  style: JSON.stringify(style),
};

export default light;
