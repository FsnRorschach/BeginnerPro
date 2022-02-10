let leitorDeCSV = new FileReader();
window.onload = function init() {
    leitorDeCSV.onload = leCSV;
};

function pegaCSV1(file) {
    pegaCSV(file);
}