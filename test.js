const btncontact1 = document.querySelector('.btncontact1');
const btncontact2 = document.querySelector('.btncontact2');
const btncontact3 = document.querySelector('.btncontact3');
const btncontact4 = document.querySelector('.btncontact4');
const btncontact5 = document.querySelector('.btncontact5');
const container = document.querySelector('.container');
const head = document.querySelector('.head');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');


btncontact1.addEventListener('click', ()=> {
    btncontact1.classList.add('none');
    btncontact2.classList.add('none');
    btncontact3.classList.add('none');
    btncontact4.classList.add('none');
    btncontact5.classList.add('none');
    container.classList.add('hide');
    head.classList.add('hide');
    p1.classList.add ('show');
});
btncontact2.addEventListener('click', ()=> {
    btncontact1.classList.add('none');
    btncontact2.classList.add('none');
    btncontact3.classList.add('none');
    btncontact4.classList.add('none');
    btncontact5.classList.add('none');
    container.classList.add('hide');
    head.classList.add('hide');
    p2.classList.add ('show');

});
btncontact3.addEventListener('click', ()=> {
    btncontact1.classList.add('none');
    btncontact2.classList.add('none');
    btncontact3.classList.add('none');
    btncontact4.classList.add('none');
    btncontact5.classList.add('none');
    container.classList.add('hide');
    head.classList.add('hide');
    p3.classList.add ('show');

});
btncontact4.addEventListener('click', ()=> {
    btncontact1.classList.add('none');
    btncontact2.classList.add('none');
    btncontact3.classList.add('none');
    btncontact4.classList.add('none');
    btncontact5.classList.add('none');
    container.classList.add('hide');
    head.classList.add('hide');
    p4.classList.add ('show');

});
btncontact5.addEventListener('click', ()=> {
    btncontact1.classList.add('none');
    btncontact2.classList.add('none');
    btncontact3.classList.add('none');
    btncontact4.classList.add('none');
    btncontact5.classList.add('none');
    container.classList.add('hide');
    head.classList.add('hide');
    p5.classList.add ('show');

});






