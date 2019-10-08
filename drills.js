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

function main8() {
    function mergeArrays(arr1, arr2) {
        let arr1Index = 0;
        let arr2Index = 0;
        let exit = new Array;

        while ((arr1Index < arr1.length) && (arr2Index < arr2.length)) {
            let arr1Value;
            let arr2Value;
            if (arr1Index > arr1.length) {
                arr2Value = arr2.get(arr2Index)
                exit.push(arr2Value)
                arr2Index++
            }
            else if (arr2Index > arr2.length) {
                arr1Value = arr1.get(arr1Index)
                exit.push(arr1Value)
                arr1Index++
            }
            else {
                arr1Value = arr1.get(arr1Index)
                arr2Value = arr2.get(arr2Index)
                if (arr1Value > arr2Value) {
                    exit.push(arr2Value)
                    arr2Index++
                }
                else if (arr1Value < arr2Value) {
                    exit.push(arr1Value)
                    arr1Index++
                }
                else if (arr1Value === arr2Value) {
                    exit.push(arr1Value)
                    exit.push(arr2Value)
                    arr1Index++
                    arr2Index++
                }
                else {
                    throw new Error('This line of code should never execute. Something broke.')
                }
            }
        }

        return exit;
    }

    let arrA = new Array
    let arrB = new Array
    arrA.push(1)
    arrA.push(3)
    arrA.push(6)
    arrA.push(8)
    arrA.push(11)
    arrB.push(2)
    arrB.push(3)
    arrB.push(5)
    arrB.push(8)
    arrB.push(9)
    arrB.push(10)

    arrC = mergeArrays(arrA, arrB)
    console.log(arrC)
    for (let i = 0; i < arrC.length; i++) {
        console.log(arrC.get(i))
    }
}

function main9() {
    function removeChars(s, removeS) {
        if (typeof s !== 'string' || typeof removeS !== 'string') {
            throw new Error('inputs must be strings')
        }
        else {
            let output = ''
            let k = 0
            let filterChar;
            let char;
            for (let i = 0; i < s.length; i++) {
                char = s[i]
                filterChar = false;
                for (let j = 0; j < removeS.length; j++) {
                    let removeSChar = removeS[j]
                    if (char === removeSChar) {
                        filterChar = true;
                        j = removeS.length;
                    }
                    else { }
                }
                if (!filterChar) {
                    output = output.slice(0, k) + char + output.slice(k)
                    k++
                }
                else { }
            }
            return output
        }
    }
    const string = 'Battle of the Vowels: Hawaii vs. Grozny'
    const filter = 'aeiou'
    console.log(removeChars(string, filter))
}

function main10() {
    function products(arr) { //O(n^2)
        let output = new Array;
        for (let i = 0; i < arr.length; i++) {
            let toPush = 1;
            for (let j = 0; j < arr.length; j++) {
                if (j === i) { }
                else {
                    toPush = toPush * arr.get(j)
                }
            }
            output.push(toPush)
        }

        return output;
    }

    myArray = new Array
    myArray.push(1)
    myArray.push(3)
    myArray.push(9)
    myArray.push(4)
    newArray = products(myArray)
    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray.get(i))
    }

    console.log('----------------')

    function betterProducts(arr) { //O(2n)
        let output = new Array;
        let totalProduct = 1
        for (let i = 0; i < arr.length; i++) {
            totalProduct = totalProduct * arr.get(i)
        }
        for (let i = 0; i < arr.length; i++) {
            output.push(totalProduct / arr.get(i))
        }
        return output;
    }

    newArray2 = betterProducts(myArray)
    for (let i = 0; i < newArray2.length; i++) {
        console.log(newArray2.get(i))
    }
}

function main11() {
    function array2d(bigArr) {
        if ((typeof bigArr !== 'object') || typeof bigArr[0] !== 'object') {
            throw new Error('input should be an array of arrays. IE: [[1, 0, 1], [0, 1, 0], [0, 0, 0]]')
        }
        let output = []
        for (let m = 0; m < bigArr.length; m++) {
            let toPush = []
            for (let n = 0; n < bigArr[m].length; n++){
                let thisValue = bigArr[m][n]
                toPush.push(thisValue)
            }
        }
        for (let i = 0; i < bigArr.length; i++) {
            let rowPushed = false;
            let smallArr = bigArr[i]
            let zeroFoundInCollumn;
            for (let j = 0; j < smallArr.length; j++) {
                let currentValue = smallArr[j]
                if (currentValue === 0) {
                    if (rowPushed) {
                        j = smallArr.length
                    }
                    else {
                    let rowToPush = []
                    for (let k = 0; k < smallArr.length; k++) {
                        rowToPush.push(0)
                    }
                    output[i] = (rowToPush);
                    rowPushed = true;
                    zeroFoundInCollumn = j
                }
                }
            }
            if (rowPushed) {
                console.log(output)
                for (let l = 0; l < bigArr.length; l++) {
                    output[l][zeroFoundInCollumn] = 0
                }
            }
            else {}
        }
        return output;
    }

    let my2dArray = [
        [1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1]
    ];

    console.log(array2d(my2dArray))

    //I have my variables referencing eachother, rather than getting set to the value of whatever variable. I have tried multiple approaches but seem to just keep crashing or breaking my code.
}

main11()