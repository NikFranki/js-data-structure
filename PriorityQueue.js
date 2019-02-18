class PriorityQueue {
    items = [];

    enqueue = (element, priority) => {
        const node = new Node(element, priority);
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (node.priority < this.items[i].priority) {
                added = true;
                this.items.splice(i, 0, node);
                break;
            }
        }

        if (!added) {
            this.items.push(node);
        }
    };

    dequeue = () => {
        return this.items.shift();
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

class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("abc", 0);
priorityQueue.enqueue("bcd", 1);
priorityQueue.enqueue("abcd", 0);
console.log(priorityQueue.content());
