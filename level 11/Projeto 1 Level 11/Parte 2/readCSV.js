function pegaCSV(inputFile) {
    let file = inputFile.files[0];
    console.log(file);
    leitorDeCSV.readAsText(file);
}
let title = '';
let mes = [];
let dia = [];

function leCSV(evt) {

    let fileArr = evt.target.result.split('\n');
    console.log(fileArr);

    for (let i = 0; i < fileArr.length; i++) {
        console.log("Posição FileArr: " + i);
        let fileLine = fileArr[i].split(';');
        console.log(fileLine);
        if (fileLine != "\r") {
            console.log("entrou no if");
            if (fileLine[i].split(/\W+/).includes('IBOVESPA')) {
                title = fileLine[i].trim();
                console.log(title);
            }
            if (fileLine[i].split(/\W+/).includes('Jan')) {
                for (let k = 0; k < fileLine.length; k++) {
                    console.log(mes[k]);

                    fileLine[k] = [
                        fileLine[k] = {}
                    ];

                }
                console.log(mes);
            }
            // if (fileLine[0] == 1) {
            //     for (let l = 0; l < mes.length; l++) {
            //         console.log(mes[l]);
            //         console.log(fileLine[l]);
            //         mes[l] = [{
            //             [l]: fileLine[l]
            //         }];
            //     }
            //     console.log(mes);
            // }
            // if (fileLine[0] == 2) {
            //     for (let m = 0; m < fileLine.length; m++) {
            //         mes[m] = [m, fileLine[m]];
            //         console.log(mes[m]);
            //     }
            //     console.log(mes);
            // }
            // if (fileLine[0] == 3) {
            //     for (let n = 0; n < fileLine.length; n++) {
            //         mes[n] = [n, fileLine[n]];
            //         console.log(mes[n]);
            //     }
            //     console.log(mes);
            // }
        }
    }
}