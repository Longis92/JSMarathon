let firstRow = prompt ('Введите первую строку');
let secondRow = prompt ('Введите вторую строку');

function charCounter(str) {
    let counterA = 0;
    for (let i=0; i<str.length; i++) {
        //в цикле первая а рус, вторая латин
        if (str.charAt(i) === 'а' || str.charAt(i) === 'a' ) {
            counterA += 1;
        };
    };
    return counterA;
};

function getRow(firstRow, secondRow) {
    //уменьшим конструкцию при помощи тернарного оператора
    return ((charCounter(firstRow) > charCounter(secondRow))) ? firstRow : secondRow;
};
alert (getRow(firstRow, secondRow));