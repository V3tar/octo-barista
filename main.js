let btns = document.querySelectorAll('.btn');
let value_sections = document.querySelectorAll('.count');
//use forEach Method
let count =0;
// btns.forEach((btn) => {
//     btn.addEventListener('click',(e) => {
//         if (e.currentTarget.classList.contains('btn-plus')) {
//             count++;
//         }
//         else {
//             count--;
//         }
//     });
// });
//set up the slider
let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let indicator_1 = document.getElementById('indi-1');
let indicator_2 = document.getElementById('indi-2');
let indicator_3 = document.getElementById('indi-3');
slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`;
});
let counter = 0;
//function to add counter
let addCounter = () => {
    counter--;
    courasel();
}
prevBtn.addEventListener('click',addCounter);
nextBtn.addEventListener('click',() =>{
    counter++;
    courasel();
});
//my sliding function
let sliding = (item) => {
    item.style.transform = `translateX(-${counter*100}%`;
}
//courasel function
let courasel = () => {
    //working with slides
    if (counter === slides.length) {
        counter = 0;
    }
    else if (counter < 0) {
        counter = slides.length -1;
    }
    if (counter ===0) {
        indicator_1.classList.add(`indicator`);
    }
    else {
        indicator_1.classList.remove(`indicator`);
    }
    if (counter ===1) {
        indicator_2.classList.add(`indicator`);
    }
    else {
        indicator_2.classList.remove(`indicator`);
    }
    if (counter === 2) {
        indicator_3.classList.add(`indicator`);
    }
    else {
        indicator_3.classList.remove(`indicator`);
    }
    slides.forEach((slide) => {
        //callback my sliding function.
        sliding(slide);
    });
}
setInterval(addCounter,6000);
//deal adding items to the cart
let cartBtn = document.getElementById('cart');
let modal = document.getElementById('modal');
let close_btn = document.querySelector('.close-btn');
let plus_btns = document.querySelectorAll('.btn-plus');
let menuItems = document.querySelectorAll('.menu-item');
let cart_count = document.getElementById('item-count');

cartBtn.addEventListener('click',() => {
    modal.showModal();
});
close_btn.addEventListener('click',() => {
    modal.close();
});
plus_btns.forEach((plus_btn) => {
    let img = plus_btn.parentElement.parentElement.previousElementSibling.firstElementChild;
    let img_src = img.src;
    let label = plus_btn.parentElement.previousElementSibling.previousElementSibling.textContent;
    plus_btn.addEventListener('click',() => {
        let new_div = document.createElement('div');
        new_div.innerHTML = `<div class="added">
        <img src="${img_src}" alt="">
        <label class='modal-label' for="item">${label}</label>
        <div class="btns-container">
            <button class='btn remove-item'><i class="fa-solid fa-minus"></i></button>
            <span>0</span>
            <button class='btn add-item'><i class="fa-solid fa-plus"></i></button>
        </div>`
        modal.appendChild(new_div);
        // add event listeners to buttons inside the cart;
        let count_drinks =0 ;
        let modal_btns = new_div.querySelectorAll('.btns-container > button');
        modal_btns.forEach((modal_btn) => {
            modal_btn.addEventListener('click',() => {
                let drinks_count = new_div.querySelector('.btns-container > span');
                if (modal_btn.classList.contains('add-item')) {
                    count_drinks++;
                }
                else {
                    count_drinks--;
                }
                drinks_count.textContent = count_drinks;
            })
        });
        //add count to the red dot on the cart
        count++;
        cart_count.textContent = count;
        //get the bouncing effect
        bounce_effect();
    });
});
//function to pop the red dot on the cart
let bounce_effect = () => {
    cart_count.style.width = `15px`;
    cart_count.style.height = `15px`;
    cart_count.style.fontSize=`11px`;
    setTimeout(() => {
        cart_count.style.width = `10px`;
        cart_count.style.height = `10px`;
        cart_count.style.fontSize=`10px`;
    },3000);
}
//make my nav sticky after scrolling a certain height
let nav = document.querySelector('.nav-tab');
window.addEventListener('scroll',() => {
    let nav_h = nav.getBoundingClientRect().height;
    let scroll_h = window.scrollY;
    if (scroll_h > nav_h) {
        nav.classList.add(`nav-fixed`);
    }
    else {
        nav.classList.remove(`nav-fixed`);
    }
});
//deal with nav when on phone or devices with smaller screens.
let link_container = document.querySelector('.link-container');
let toggle_btn = document.querySelector('.toggle-btn');
let list = document.querySelector('.links');

//add event listener to the toggle btn
toggle_btn.addEventListener('click',() => {
    let links_cont_h = link_container.getBoundingClientRect().height;
    let list_h = list.getBoundingClientRect().height;
    let nav_h = nav.getBoundingClientRect().height;
    if (links_cont_h === 0) {
        link_container.style.height = `${nav_h+list_h}px`;
    }
    else {
        link_container.style.height = `0px`;
    }
});


