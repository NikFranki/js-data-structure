// 后进先出(类比垃圾桶)
class Stack {
    items = [];
    // 入栈
    push = (element) => {
        this.items.push(element);
    }

    // 出栈
    pop = () => {
        return this.items.pop();
    }

    // peek(窥视)操作
    peek = () => {
        return this.items[this.size() - 1];
    }

    // 是否为空
    isEmpty = () => {
        return this.items.length === 0;
    }

    // 栈中的个数
    size = () => {
        return this.items.length;
    }

    // 栈中的元素
    content = () => {
        return this.items;
    }
}

var stack = new Stack();
stack.push(6);
stack.push(5);
console.log(stack.content());
console.log(stack.size());