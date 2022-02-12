const button1 = document.querySelector('.strt')
const button2 = document.querySelector('.open')
const button3 = document.querySelector('.go')
const button4 = document.querySelector('.close')
const car = document.querySelector('.car')
const door = document.querySelector('.door')



button1.addEventListener('click',()=>{
    car.style.transform = 'translateX(800px)';
})

button2.addEventListener('click',()=>{
    door.style.background = 'black';
})

button3.addEventListener('click',()=>{
    car.style.transform = 'translate(1400px,-80px)'
})

button4.addEventListener('click',()=>{
    door.style.background = 'white';
})