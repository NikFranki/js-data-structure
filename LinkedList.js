// 链表
class LinkedList {
    length = 0;
    head = null;

    append = element => {
        const node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            if (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.length++;
    }

    toString = () => {
        let current = this.head;
        let listString = "";

        while (current) {
            listString += "," + current.element;
            current = current.next;
        }
        return listString.slice(1);
    }

    insert = (element, position) => {
        if (position < 0 || position > this.length) return;
        let previous = null;
        let index = 0;
        let current = this.head;

        const node = new Node(element);

        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }

        this.length++;
        return true;
    }

    removeAt = position => {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;
        let previous = null;
        let index = 0;

        if (position === 0) {
            this.head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.length--;
        return current.element;
    }

    indexOf = element => {
        let current = this.head,
            index = 0;

        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    remove = element => {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    isEmpty = () => {
        return this.length.length === 0;
    }

    size = () => {
        return this.length;
    }

    getFirst = () => {
        return this.head.element;
    }

    content = () => {
        return this.head;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.insert(1, 1);
linkedList.insert(2, 1);
linkedList.removeAt(0);
linkedList.remove(2);
linkedList.toString();
linkedList.size();

console.log(linkedList.content());
