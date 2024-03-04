export class Storage {
    static set = (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    }

    static get = (name) => {
        const info = localStorage.getItem(name);
        return JSON.parse(info);
    }

    static remove = (index) => {
        const keys = Object.keys(localStorage);
        console.log(keys);
    }

    static clear = (name) => {
        localStorage.removeItem(name);
    }
}