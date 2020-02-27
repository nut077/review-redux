const keyState = 'state';

export function saveState(state) {
  try {
    localStorage.setItem(keyState, JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem(keyState);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
