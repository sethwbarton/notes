export class SingleLinkedList<T> {
    private head?: Node<T>;

    constructor(items: T[]) {
        this.head = undefined;

        if (items[0]) this.head = new Node(items[0])
        let prev = this.head
        for (let i = 0; i < items.length; i++) {
            if (items[i + 1]) {
                let next = new Node(items[i+1])
                prev?.setNext(next)
                prev = next;
            }
        }
    }

    /**
     * True if the linked list is empty, false otherwise.
     * */
    isEmpty(): boolean {
        return !this.head
    }

    /**
     * Clears the list.
     *
     * Do we know when garbage disposal happens? If there's no reference to an object, does TS automatically clean it up?
     * */
    clear(): void {
       this.head = undefined
    }
}

class Node<T> {
    private next: Node<T> | undefined;
    private value: T;

    constructor(value: T, next?: Node<T>) {
        this.value = value
        if (next) {
            this.next = next;
        } else {
            this.next = undefined;
        }
    }

    getNext() {
        return this?.next
    }

    setNext(newNext: Node<T>) {
        this.next = newNext
    }
}