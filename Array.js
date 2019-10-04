const Memory = require('./Memory')

class Array {
    constructor() {
        this.length = 0;
        this.ptr = Memory.allocate(this.length)
    }

}

module.exports = Array