let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
// When btn is clicked
let btn12 = document.querySelector('.btn12');
let btn22 = document.querySelector('.btn22');
let btn32 = document.querySelector('.btn32');
let btn42 = document.querySelector('.btn42');
let btn52 = document.querySelector('.btn52');
let btn62 = document.querySelector('.btn62');

let div1 = document.querySelector('.one');
let div2 = document.querySelector('.two');
let div3 = document.querySelector('.three');
let div4 = document.querySelector('.four');
let div5 = document.querySelector('.five');
let div6 = document.querySelector('.six');

let divs = document.querySelectorAll('.divs');
let buttons = document.querySelectorAll('#buttons .btns1');
let btnsGroup = document.getElementById('buttons');
let buttonsClick = document.querySelectorAll('#buttons .btns2');

let smDevicesCont = document.getElementById('smallDevices');

// console.log(buttons);
// console.log(buttonsClick);


// let removeActive = () => {
//     divs.forEach(div => {
//         div.classList.remove('active');
//     });
// }

// let removeClick = () => {
//     buttons.forEach(btn => {
//         buttonsClick.forEach(btn1 => {
//             btn1.style.display = "none";
//         });
//         btn.style.display = 'block';
//     });
// }


// buttons.forEach(btn => {
//     btn.addEventListener('click', e => {
//         removeActive();
//         removeClick();

//         buttonsClick.forEach(btn1 => {
//             if(btn1.classList.contains(e.target.id)){
//                 btn1.style.display = "block";
//                 if(btn.id == e.target.id){
//                     btn.style.display = "none";
//                 }
//             }
//         })

//     });
// })


// window.addEventListener('resize', function(e){
//     let newWidth = window.innerWidth;
//     if(newWidth < 768){
//             btnsDiv.setAttribute('style', 'position: absolute; bottom: 0px;');
//             buttonsClick.forEach(btn => {
//                 btn.setAttribute('style', 'position: absolute; top: 0px;');
//             })

//     } else {        
//             btnsDiv.setAttribute('style', 'position: relative;');
//     }
// });


console.log(buttons);
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
}

console.log(div1);


let backIcon = () => {
    btn1.addEventListener('click', () => {
        deleteActive();

        if (div1.classList.contains('active')) {
            div1.classList.remove('active');
            btn12.style.display = 'none';
        } else {
            div1.classList.add('active');
            btn1.style.display = 'none';
            btn12.style.display = 'block';
        }
    });

    // console.log(btn2);

    btn2.addEventListener('click', () => {
        deleteActive();

        if (div2.classList.contains('active')) {
            div2.classList.remove('active');
            btn22.style.display = 'none';
        } else {
            div2.classList.add('active');
            btn2.style.display = 'none';
            btn22.style.display = 'block';
        }
    });

    btn3.addEventListener('click', () => {
        deleteActive();
        if (div3.classList.contains('active')) {
            div3.classList.remove('active');
            btn32.style.display = 'none';

        } else {
            div3.classList.add('active');
            btn3.style.display = 'none';
            btn32.style.display = 'block';
        }
    });


    // Promenjeno je do btn4

    btn4.addEventListener('click', () => {
        deleteActive();
        if (div4.classList.contains('active')) {
            div4.classList.remove('active');
            btn42.style.display = 'none';

        } else {
            div4.classList.add('active');
            btn4.style.display = 'none';
            btn42.style.display = 'block';
        }
    });

    btn5.addEventListener('click', () => {
        deleteActive();
        if (div5.classList.contains('active')) {
            div5.classList.remove('active');
            btn52.style.display = 'none';
        } else {
            div5.classList.add('active');
            btn5.style.display = 'none';
            btn52.style.display = 'block';
        }
    });

    btn6.addEventListener('click', () => {
        deleteActive();
        if (div6.classList.contains('active')) {
            div6.classList.remove('active');
            btn62.style.display = 'none';
        } else {
            div6.classList.add('active');
            btn6.style.display = 'none';
            btn62.style.display = 'block';
        }
    });
};


window.addEventListener('resize', function (e) {
    let newWidth = window.innerWidth;
    if (newWidth < 991) {
        deleteActive();
        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttonsClick.forEach(btn1 => {
                    btn1.style.display = "none";
                    // btn.style.display = "block";
                    // btnsGroup.style.display = 'none'; ovo obuhvata i btnsClick
                    buttons.forEach(btn => {
                        btn.style.display = "none";
                    });
                    smDevicesCont.style.display = 'block';
                    divs.forEach(div => {
                        div.classList.remove("active");
                    });
                });
            });
        });
    } else {
        backIcon();
        smDevicesCont.style.display = 'none';
        
        // buttons.forEach(btn => {
            //     btn.addEventListener('click', () => {
                //     });
                // });
            }
            // Kako da se vrate ikonice???????????????????????????????????
        });
        backIcon();


