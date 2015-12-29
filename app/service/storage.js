export class LocalStorage {

    static getItem(key, defaultValue) {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return defaultValue;
        }
    }

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }
}
