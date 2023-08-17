function reverseArray(array){
    let output = []
    for(i = array.length - 1; i >= 0; i-- ){
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace (array){
    for (i = 0; i < Math.floor(array.length / 2); i++){
        let first = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = first;
    }
    return array;
}

console.log(reverseArray([1, 2, 3, 4]));