class Set {
    items = {};

    has = (value) => {
        return this.items.hasOwnProperty(value);
    }

    add = (value) => {
        if (this.has(value)) return false;
        this.items[value] = value;
    }

    remove = (value) => {
        if (!this.items[value]) return false;
        delete this.items[value];
        return true;
    }

    size = () => {
        return Object.keys(this.items).length;
    }

    values = () => {
        return Object.values(this.items);
    }
}

const set = new Set();
set.add(1);
set.add(2);
console.log(set);
set.values();
set.size();