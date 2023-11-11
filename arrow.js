'use strict';

const left = document.querySelector('.leftArrow');
const right = document.querySelector('.rightArrow');
const divEl = document.querySelector('.container');
const imgArray = divEl.querySelectorAll(`[data-image]`);
const dots = document.querySelector('.dots');
const dotArray = dots.querySelectorAll(`[data-dot]`);
let numberImg = 1;
const amountImg = imgArray.length;

window.addEventListener('load', () => {
    imgArray.forEach(item => {
        if (parseInt(item.getAttribute(`data-image`)) !== numberImg){
            item.classList.add('hidden');
        } else{
            item.classList.add('visible');
        }
    });
    dotArray.forEach(item => {
        if (parseInt(item.getAttribute(`data-dot`)) === numberImg){
            item.classList.add('colorDot');
        }
    });
});


//стрелки
left.addEventListener('click', () => {
    numberImg--;
    if(numberImg == 0){
        numberImg = amountImg; 
    }
    changeClass(numberImg);
    selectDot(numberImg);
})

right.addEventListener('click', () => {
    numberImg++;
    if(numberImg > amountImg){
        numberImg -= amountImg; 
    }
    changeClass(numberImg);
    selectDot(numberImg);
})

function changeClass(number){
    const currentImg = document.querySelector('.visible');
    currentImg.classList.remove('visible');
    currentImg.classList.add('hidden');
    imgArray.forEach(item => {
        if (parseInt(item.getAttribute(`data-image`)) === number){
            item.classList.remove('hidden');
            item.classList.add('visible');
        }
    });
}


//точки
dots.addEventListener('click', (e) => {
    if (e.target.tagName === 'svg'){
        const number = parseInt(e.target.getAttribute(`data-dot`));
        selectDot(number);
        numberImg = number;
        changeClass(number);
    }    
})        

function selectDot(number){
    const currentDot = dots.querySelector('.colorDot');
    currentDot.classList.remove('colorDot');
    dotArray.forEach(item => {
        if (parseInt(item.getAttribute(`data-dot`)) === number){
            item.classList.add('colorDot');
        }
    });
}

