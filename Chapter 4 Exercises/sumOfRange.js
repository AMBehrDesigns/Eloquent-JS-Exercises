function range(start, end, step = start < end ? 1 : -1){ 
    let Array = []
    if (step > 0){
        for(i = start; i <= end; i+= step) Array.push(i);
    } else {
        for(i = start; i >= end; i += step) Array.push(i);
    }
    return Array;
}

function sum(Array){
    let total = 0;
    for(value of Array){
        total += value;
    }
    return total;
}

console.log(range(sum(5, 2, -1))