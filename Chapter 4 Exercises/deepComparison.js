function deepEqual(a, b) {
    if(a === b) return true;
    let aKeys = Object.keys(a), bKeys = Object.keys(b);
    if(aKeys.length != bKeys.length) return false;
    for(key of aKeys){
        if(!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    if (a == null || typeOf(a) != "object" || b == null || typeOf(b) != "object") return false;
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));