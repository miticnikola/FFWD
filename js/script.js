// Buttons for large devices
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');

// Large round button (when btn is clicked)
let btn12 = document.querySelector('.btn12');
let btn22 = document.querySelector('.btn22');
let btn32 = document.querySelector('.btn32');
let btn42 = document.querySelector('.btn42');
let btn52 = document.querySelector('.btn52');
let btn62 = document.querySelector('.btn62');

// Content (div-s) for large devices
let div1 = document.querySelector('.one');
let div2 = document.querySelector('.two');
let div3 = document.querySelector('.three');
let div4 = document.querySelector('.four');
let div5 = document.querySelector('.five');
let div6 = document.querySelector('.six');

let sectMain = document.getElementById('main');
let divs = document.querySelectorAll('.divs');
let buttons = document.querySelectorAll('#buttons .btns1');
let btnsGroup = document.getElementById('buttons');
let buttonsClick = document.querySelectorAll('#buttons .btns2');

let smBtns = document.querySelectorAll('.btnSm');
let smDevicesCont = document.getElementById('smallDevices');
let smBtnGroup = document.getElementById('smallGroup');


// Show and hide content for large devices

function deleteActive() {
    divs.forEach(div => {
        div.classList.remove('active');
    });

    buttons.forEach(btn => {
        buttonsClick.forEach(btn1 => {
            btn1.style.display = "none";
        });

        btn.style.display = "block";
    });
};

let showOrHideCont = (div, btn1, btn2) => {
    btn1.addEventListener('click', () => {
        deleteActive();
        sectMain.style.paddingTop = '0px';

        if (div.classList.contains('active')) {
            div.classList.remove('active');
            btn2.style.display = 'none';
        } else {
            div.classList.add('active');
            btn1.style.display = 'none';
            btn2.style.display = 'block';
        }
    });
}


let backIcon = () => {
    showOrHideCont(div1, btn1, btn12);
    showOrHideCont(div2, btn2, btn22);
    showOrHideCont(div3, btn3, btn32);
    showOrHideCont(div4, btn4, btn42);
    showOrHideCont(div5, btn5, btn52);
    showOrHideCont(div6, btn6, btn62);
};


// Show content for small devices
smBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        smDevicesCont.style.display = "block";
        smBtnGroup.style.display = "none";
    });
});


backIcon();


