const Memory = require('./Memory')
const memory = new Memory

class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length)
        this._capacity = 0;
        this.SIZE_RATIO = 3;
    }

    push(input) {
        if (this.length >= this._capacity) {
            let size = ((this.length + 1) * this.SIZE_RATIO);
            const ptrPrev = this.ptr;
            this.ptr = memory.allocate(size);
            if (this.ptr === null) {
                throw new Error('Out of memory');
            }
            else {
                memory.copy(this.ptr, ptrPrev, this.length);
                memory.free(ptrPrev);
                this._capacity = size;
            }
        }
        memory.set(this.ptr + this.length, input);
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Array.length is 0. Nothing to pop');
        }
        else {
            const value = memory.get(this.ptr + this.length - 1);
            this.length--;
            return value;
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index should be >= 0 and <= array.length');
        }
        else {
            return memory.get(this.ptr + index);
        }
    }

}

module.exports = Array