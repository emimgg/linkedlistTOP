class LinkedList {
    
    constructor() {
        this.head = null; 
    }

    append(value) { //works
        const temp = new Node(value);
        if (!this.head) {
            this.head = temp;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = temp;
    }

    prepend(value) { //works
        const newNode = new Node(value);
        const tempHead = this.head;

        if (tempHead) {
            this.head = newNode;
            newNode.next = tempHead;
        } else {
            this.head = newNode;
            return;
        }
    }

    size() { //works
        let current = this.head;
        let count = 0;

        if (!this.head) return count;

        while (current.next) {
            current = current.next;
            count++
        }
        return count + 1;
    }

    tail() { //works
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    at(index) { //works
        let current = this.head;
        let i = 0;
        while ( i < index) {
            current = current.next;
            i++
        }
        return current;
    }

    pop() { //works

        if (!this.head) return; 
        if (!this.head.next) { 
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    contains(value) { //works
        let current = this.head;
        while (current.next && value != current.value) {
            current = current.next;
        }
        return (current.value == value);
    }

    find(value) { //works
        let current = this.head;
        let i = 0;
        while(current.next && value != current.value) {
            current = current.next;
            i++;
        }
        return i;
    }

    toString() { //works
        let current = this.head;
        let stringToPrint = ``;
        while(current.next) {
            stringToPrint += `(${current.value}) -> `
            current = current.next;
        }
        stringToPrint += `(${current.value}) -> null`
        return stringToPrint;
    }

    insertAt(value, index) {
        let current = this.head;
        let i = 0;
        while ( i < index - 1) {
            current = current.next;
            i++
        }
        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
    }

    removeAt(index) {
        if (index === 0) {
            if (!this.head) return; 
            this.head = this.head.next;
            return;
        }
    
        let current = this.head;
        let i = 0;
    
        while (i < index - 1 && current.next) {
            current = current.next;
            i++;
        }
    
        if (!current.next) {
            console.log("Index out of bounds");
            return;
        }
    
        current.next = current.next.next;
    }
} 

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;    
    }
}

const list = new LinkedList;

list.append("Dog");
list.append("Cat");
list.append("Bird");
list.append("Man");
list.prepend("Shark");

console.log(list.size());

console.log(list.toString());
// console.log(list.tail());

console.log(list.contains("Man"));
console.log(list.find("Bird"));
console.log(list.size());
list.insertAt("Mouse", 2);
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
// console.log(list.at(3));
