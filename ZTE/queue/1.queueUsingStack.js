class QueueImplementation {
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }

    empty(){
        this.stack1=[];
        this.stack2=[];
    }

    peek(){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2[this.stack2.length - 1]
    }
}

const qu = new QueueImplementation();

qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);

console.log(qu.dequeue())
console.log(qu.dequeue())
console.log(qu.dequeue())

qu.enqueue('a');
console.log(qu)
console.log(qu.dequeue())
qu.enqueue('b');
qu.enqueue('c');

console.log(qu.peek())
console.log(qu.peek())

console.log(qu.dequeue())
console.log(qu.dequeue())