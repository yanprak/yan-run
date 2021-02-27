import { ApplicationState } from '../../store';

export const saveState = (state: ApplicationState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error('[ERROR] Could not save state to localStorage', e);
  }
};

/*
  Returns undefined, because second args for createStore() can accept undefined, [], {} & fn but not null.
*/
export const loadState = (): ApplicationState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as ApplicationState;
  } catch {
    return undefined;
  }
};

export const checkOpenTabs = () => {
  localStorage.setItem('lastActiveSession', `${Date.now()}`);
  window.addEventListener('storage', (event: StorageEvent) => {
    if (event.key === 'lastActiveSession') {
      localStorage.setItem('tabSessionActive', `${Date.now()}`);
    } else if (event.key === 'tabSessionActive') {
      // TODO: What functionality do we expect from checking the open tabs? State sync?
      alert('Game is opened in several tabs');
    }
  });
};
