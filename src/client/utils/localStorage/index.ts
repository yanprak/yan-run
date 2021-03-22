import { ApplicationState } from '../../store/types';

export const saveState = (state: ApplicationState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    window.console.error('[ERROR] Could not save state to localStorage', e);
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
