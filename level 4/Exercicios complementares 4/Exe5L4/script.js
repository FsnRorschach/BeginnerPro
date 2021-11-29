let random_array = [5000, 0.18, 27, 1 / 3];

let newArray = [];

random_array.forEach(function (val, i) {
    newArray.push(
        Math.pow(random_array[i], 2)
    );
    console.log(val);
    console.log(i);
    console.log(newArray);
});