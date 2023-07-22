const head = document.getElementById('header');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const menu = document.getElementById('menu');
const menubtn = document.getElementById('menubtn');


btn1.addEventListener('click', () =>{
    head.style.background = "url('cat11.jpg') no-repeat center center/cover";
    btn1.style.border = "ridge";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "none";
})

btn2.addEventListener('click', () =>{
    head.style.background = "url('cat22.jpg') no-repeat center center/cover";
    btn2.style.border = "ridge";
    btn1.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "none";
})

btn3.addEventListener('click', () =>{
    head.style.background = "url('cat33.jpg') no-repeat center center/cover";
    btn3.style.border = "ridge";
    btn2.style.border = "none";
    btn1.style.border = "none";
    btn4.style.border = "none";
})

btn4.addEventListener('click', () =>{
    head.style.background = "url('cat44.jpg') no-repeat center center/cover";
    btn4.style.border = "ridge";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn1.style.border = "none";
})


const loading = () =>{
    let head = document.getElementById('header');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');


    setTimeout(() =>{
        head.style.background = "url('cat11.jpg') no-repeat center center/cover";
        btn1.style.border = "ridge";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "none";
    }, 0);
    setTimeout(() =>{
        head.style.background = "url('cat22.jpg') no-repeat center center/cover";
        btn2.style.border = "ridge";
    btn1.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "none";
    }, 5000);
    setTimeout(() =>{
        head.style.background = "url('cat33.jpg') no-repeat center center/cover";
        btn3.style.border = "ridge";
    btn2.style.border = "none";
    btn1.style.border = "none";
    btn4.style.border = "none";
    }, 10000);
    setTimeout(() =>{
        head.style.background = "url('cat44.jpg') no-repeat center center/cover";
        btn4.style.border = "ridge";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn1.style.border = "none";
    }, 15000);
    
}

setInterval(loading, 20000);
loading();  