const menuBtn = document.querySelector('.menu');
const menubar = document.querySelector('.nav-items');
const closeBtn = document.querySelector('.closebtn');
const addCart = document.querySelector('.addcart');
const cartItem = document.querySelector('.cart-item');

menuBtn.addEventListener('click', () => {
  menubar.classList.add('showmenu');
});

closeBtn.addEventListener('click', () => {
  menubar.classList.remove('showmenu');
});

addCart.onclick = () => {
  let text = document.querySelector('.text');
  cartItem.classList.remove('hide');
  text.classList.add('hide');
};
