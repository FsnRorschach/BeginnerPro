let arr = ["otavio", 23, true, {
    sobrenome: "barros"
}];

for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
        console.log(key, arr[key]);
        arr[key] = 5;
        console.log(key, arr[key]);
    }
}

console.log(arr);