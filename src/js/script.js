const leftarrow = document.querySelector('.slider__left'),
      rightarrow = document.querySelector('.slider__right'),
      sc = document.querySelector('.slider__content');
      blocksarray = sc.querySelectorAll('.slider__block');

let slidercount = 0;
sliderchange();
reset();
    
leftarrow.addEventListener('click', ()=> {
    slidercount--;
    reset();
    sliderchange();
    console.log(slidercount);
});
rightarrow.addEventListener('click', ()=> {
    slidercount++;
    reset();
    sliderchange();
    console.log(slidercount);
});


function reset() {
    if (slidercount > 2) {
        slidercount = 0;
    }
    if (slidercount < 0) {
        slidercount = 2;
    }
}

function sliderchange() {
    blocksarray.forEach((block,  index) => {
        if (index == slidercount) {
            block.classList.add('slider__block_active')
        } else {
            block.classList.remove('slider__block_active')
        }
    });
}

//tabs
const catalogTabs = document.querySelectorAll('.catalog__elements'),
      fitness =     document.querySelector('#fitness'),
      sprint =      document.querySelector('#sprint'),
      triatlon =    document.querySelector('#triatlon');
let tabsId = 0;

function ChangeTabs() {
    fitness.addEventListener('click', ()=> {
        fitness.classList.add('catalog__navbutton_active');
        sprint.classList.remove('catalog__navbutton_active');
        triatlon.classList.remove('catalog__navbutton_active');
        tabsId = 0;
        ShowTabs();
    });
    sprint.addEventListener('click', ()=> {
        fitness.classList.remove('catalog__navbutton_active');
        sprint.classList.add('catalog__navbutton_active');
        triatlon.classList.remove('catalog__navbutton_active');
        tabsId = 1;
        ShowTabs();
    });
    triatlon.addEventListener('click', ()=> {
        fitness.classList.remove('catalog__navbutton_active');
        sprint.classList.remove('catalog__navbutton_active');
        triatlon.classList.add('catalog__navbutton_active');
        tabsId = 2;
        ShowTabs();
    });
}
ChangeTabs();

function ShowTabs() {
    catalogTabs.forEach((list, id) => {
        if (id == tabsId) {
            list.classList.add('catalog__elements_active');
        } else {
            list.classList.remove('catalog__elements_active');
        }
    });
}