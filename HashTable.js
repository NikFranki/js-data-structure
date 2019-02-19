// 哈希函数
class HashFunc {
    getHashCode = (str, max) => {
        let hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        hashCode = hashCode % max;
        return hashCode;
    }
}

// 哈希列表
class HashTable {
    storage = [];
    count = 0;
    limit = 8;

    isPrime = (num) => {
        const temp = parseInt(Math.sqrt(num));
        for (let i = 2; i <= temp; i++) {
            if (num % 2 === 0) {
                return false;
            }
        }
        return true;
    }

    getPrime = (num) => {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    }

    hashFunc = (str, max) => {
        return new HashFunc().getHashCode(str, max);
    }

    put = (key, value) => {
        let index = this.hashFunc(key, this.limit);

        let bucket = this.storage[index];

        if (bucket === undefined) {
            bucket = [];
            this.storage[index] = bucket;
        }

        let override = false;
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i];
            if (tuple[0] === key) {
                tuple[1] = value;
                override = true;
            }
        }

        if (!override) {
            bucket.push([key, value]);
            this.count++;

            if (this.count > this.limit * 0.75) {
                const primeNum = this.getPrime(this.limit * 2);
                this.resize(primeNum);
            }
        }
    }

    get = (key) => {
        const index = this.hashFunc(key, this.limit);

        const bucket = this.storage[index];

        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i];
            if (tuple[0] === key) {
                return tuple[1];
            }

            return null;
        }
    }

    remove = (key) => {
        const index = this.hashFunc(key, this.limit);

        const bucket = this.storage[index];

        if (bucket === null) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i];
            if (tuple[0] === key) {
                bucket.splice(i, 1);
                this.count--;

                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    const primeNum = this.getPrime(Math.floor(this.limit / 2));
                }
            }

            return tuple[1];
        }
        return null;
    }

    isEmpty = () => {
        return this.count === 0;
    }

    size = () => {
        return this.count;
    }

    resize = (newLimit) => {
        const oldStorage = this.storage;

        this.limit = newLimit;
        this.count = 0;
        this.storage = [];

        oldStorage.forEach(function (bucket) {
            if (bucket === null) {
                return;
            }

            for (let i = 0; i < bucket.length; i++) {
                const tuple = bucket[i];
                this.put(tuple[0], tuple[1]);
            }
        }).bind(this);
    }
}


const ht = new HashTable();

ht.put('abc', '123');
ht.put('cba', '321');
ht.put('nba', '521');
ht.put('nba', '520');

console.log(ht.get('abc'));
console.log(ht.size());
console.log(ht.isEmpty());