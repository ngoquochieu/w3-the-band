const buysBtn = document.querySelectorAll('.js-buy-tickets');
const model = document.querySelector('.js-model');
const close = document.querySelector('.js-close');
const model_container = document.querySelector('.js-model-container');

// Lap qua tung btn va them su kien cho no
for(buyBtn of buysBtn) {
    buyBtn.addEventListener('click', () => {
        model.classList.add('open');
    })
}

// Dong khi click X
close.addEventListener('click', () => {
    model.classList.remove('open');
})

//Mo khi click bnt buy
model.addEventListener('click', () => {
    model.classList.remove('open');
})

// Ngan chan su kien noi bot
model_container.addEventListener("click", (event) => {
    event.stopPropagation();
})

