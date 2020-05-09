export function setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}

export function getSavedState(localStorageKey: string): any {
    return JSON.parse(localStorage.getItem(localStorageKey));
}
