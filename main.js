//const firstRow = 'мама мыла раму';
//const secondRow = 'собака друг человека';
let firstRow = prompt ('Введите первую строку');
let secondRow = prompt ('Введите вторую строку');

function charCounter(str) {
    let counterA = 0;
    for (let i=0; i<str.length; i++) {
        //в цикле первая а рус, вторая латин
        if (str.charAt(i) == 'а' || str.charAt(i) == 'a' ) {
            counterA += 1;
        };
    };
    //console.log(counterA);
    return counterA;
};

function getRow(firstRow, secondRow) {
    if (charCounter(firstRow) > charCounter(secondRow)) {
        return firstRow;
    } else {
        return secondRow;
    };
};

alert (getRow(firstRow, secondRow));
//console.log (getRow(firstRow, secondRow));