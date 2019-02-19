class Dictionay {
    items = {};

    set = (key, value) => {
        this.items[key] = value;
    }

    has = (key) => {
        return this.items.hasOwnProperty(key);
    }

    remove = (key) => {
        if (!this.has(key)) return false;
        delete this.item[key];
    }

    get = (key) => {
        if (!this.has(key)) return undefined;
        return this.items[key];
    }

    keys = () => {
        return Object.keys(this.items);
    }

    values = () => {
        return Object.values(this.items);
    }

    size = () => {
        return Object.keys(this.items).length;
    }

    clear = () => {
        this.items = {};
    }
}

const dictionay = new Dictionay();
dictionay.set(1, 1);
dictionay.set(2, 2);
dictionay.size();
dictionay.keys();
console.log(dictionay);
