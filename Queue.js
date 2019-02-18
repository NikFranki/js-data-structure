// 队列 先进先出（类似排队）
class Queue {
    items = [];

    enqueue = element => {
        this.items.push(element);
    };

    dequeue = () => {
        return this.items.shift();
    };

    front = () => {
        return this.items[0];
    };

    isEmpty = () => {
        return this.items.length === 0;
    };

    size = () => {
        return this.items.length;
    };

    content = () => {
        return this.items;
    };
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.content());
console.log(queue.size());
