const style = {
  // default
  '--default-bg-color': '#363636',
  '--default-bg-hover-color': '#4e4c4c',
  '--default-color': '#cbcbcb',
  '--default-border-color': '#505050',
  // primary
  '--primary-bg-color': '#5b8a20',
  '--primary-bg-hover-color': '#6da328',
  '--primary-color': '#fff',
  // secondary
  '--secondary-bg-color': '#404040',
  '--secondary-bg-hover-color': '#5f5f5f',
  '--secondary-color': '#83d21f',
  // success
  '--success-bg-color': '#147c4a',
  '--success-bg-hover-color': '#18995b',
  '--success-color': '#fff',
  // error
  '--error-color': '#ff6c6c',
  // ghost
  '--ghost-bg-color': 'transparent',
  '--ghost-bg-hover-color': 'rgba(255, 255, 255, 0.1)',
  '--ghost-color': '#cbcbcb',
  // successInvert
  '--successInvert-bg-color': 'transparent',
  '--successInvert-bg-hover-color': 'rgba(255, 255, 255, 0.1)',
  '--successInvert-color': '#8cf38c',
  // dark
  '--dark-bg-color': '#202020',
  // focus
  '--focus-border-color': '#fff',
  // transparent dark
  '--dark-overflow-bg-color': 'rgba(0, 0, 0, 0.3)',
  '--avatar-color': '#000',
};

const dark = {
  id: 1,
  name: 'dark',
  hidden: false,
  style: JSON.stringify(style),
};

export default dark;
