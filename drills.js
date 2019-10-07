const Array = require('./Array')

function main2() {
    let arr = new Array
    arr.SIZE_RATIO = 3;
    arr.push(3)
    console.log(arr)
    //length = 1
    //capacity = 3
    //ptr = 0
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr)
    //length = 6, ptr = 3, capacity = 12

}

function main3() {
    let arr = new Array
    arr.SIZE_RATIO = 3;
    arr.push(3); //arr[0]
    arr.push(5);  //arr[1]
    arr.push(15); //arr[2]
    arr.push(19); //arr[3]
    arr.push(45); //arr[4]
    arr.push(10); //arr[5]
    for (let i = 0; i < 3; i++) {
        arr.pop(); //removes arr[arr.length - i]
    }
    console.log(arr)
    //length = 6, ptr = 3, capacity = 12
}

function main4() {
    let arr = new Array
    arr.SIZE_RATIO = 3;
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    for (let i = 0; i < 3; i++) {
        arr.pop();
    }

    console.log(arr.get(0))

    arr = new Array
    arr.SIZE_RATIO = 3;
    arr.push("tauhida")
    console.log(arr.get(0))
    //returns NaN, because the way the memory class is setup, it can only handle numbers, and not strings. See line 42-43 of Memory.js. My bet is memory[ptr] must be equal to a number only.

    //the _resize() function in the array class (that I got rid of since it was only used once), was to allocate more memory for the array should it run out of space.
}

function main5() {
    function urlify(s) {
        if (typeof s !== 'string') {
            throw new Error('input must be a string')
        }
        else {
            let output = ''
            let j = 0
            for (let i = 0; i < s.length; i++) {
                let char = s[i]
                if (char === ' ') {
                    output = output.slice(0, j) + '%20' + output.slice(j)
                    j = j + 3
                }
                else {
                    output = output.slice(0, j) + char + output.slice(j)
                    j++
                }
            }
            return output
        }
    }

    console.log(urlify('tauhida parveen'))
    console.log(urlify('www.thinkful.com /tauh ida parv een'))
}

function main6() {
    function filterArray_lessThanOrEqualTo(arr, num) {
        let exit = new Array;
        for (let i = 0; i < arr.length; i++) {
            let currentValue = arr.get(i)
            if (currentValue <= num) {
                exit.push(currentValue)
            }
            else { }
        }
        return exit
    }

    let myArray = new Array
    for (let i = 0; i < 20; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        myArray.push(randomNum)
    }
    myArray = filterArray_lessThanOrEqualTo(myArray, 5)
    console.log(myArray)
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray.get(i))
    }


}

function main7() {
    function maxSum(arr) {
        let maxVal = 0
        for (let i = 0; i < arr.length; i++) {
            let currentSum = 0;
            for (let j = i; j < arr.length; j++) {
                let currentValue = arr.get(j)
                currentSum = currentSum + currentValue
                if (currentSum > maxVal) {
                    maxVal = currentSum
                }
            }
        }
        return maxVal
    }


    let input = new Array;
    input.push(4)
    input.push(6)
    input.push(-3)
    input.push(5)
    input.push(-2)
    input.push(1)
    let output = maxSum(input)
    console.log(output)

}

