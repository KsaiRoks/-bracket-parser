let s = '';
let i = 0;
let flag = false;
let ch = '';

function readCh() {
    i += 1;
    ch = s[i - 1];
}

function error() {
    flag = true;
}

function A() {
    if (ch === '(') {
        readCh();
    } else {
        error();
    }
    while (ch === '(') {
        A();
    }
    if (ch === ')') {
        readCh();
    } else {
        error();
    }
    while (ch === '(') {
        A();
    }
}

function resetForm() {
    document.getElementById('inputString').value = '';
    document.getElementById('result').innerText = 'Ожидание';
};

function validateSimple() {
    s = document.getElementById('inputString').value;
    let sch = 0;
    flag = false;
    for (i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            sch += 1;
        } else {
            sch -= 1;
        }
        if (sch < 0) {
            flag = true;
        }
    }
    if (sch !== 0) {
        flag = true;
    }
    document.getElementById('result').innerHTML = flag ? 'Неверно!' : 'Верно!';
};

function validateRecursive() {
    i = 0;
    flag = false;
    s = document.getElementById('inputString').value + '@';
    readCh();
    while (!flag && ch !== '@') {
        A();
    }
    document.getElementById('result').innerHTML = flag ? 'Неверно1!' : 'Верно1!';
};