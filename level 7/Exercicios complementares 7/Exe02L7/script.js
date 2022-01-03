const funcaoReverseString = function (a) {
    console.log(a.split("").reverse().join(""));
};


const funcaoReverseString2 = (a) => {
    console.log(a.split("").reverse().join(""));
};

const funcaoReverseString3 = a => console.log(a.split("").reverse().join(""));

funcaoReverseString("Dois patinhos foram passear");
funcaoReverseString2("Dois patinhos foram passearu");
funcaoReverseString3("Dois patinhos foram passear");