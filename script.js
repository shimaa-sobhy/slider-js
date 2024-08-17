let closeitem = document.getElementById("close");
let containerbox = document.getElementById("containerbox");
let itembox = document.getElementById('itembox')
let imgsa = Array.from(document.querySelectorAll('.item img'));

let next = document.getElementById('next');
let previs = document.getElementById('previs');

function closemodle() {
    containerbox.style.display = 'none'
}
closeitem.addEventListener('click', closemodle);

document.addEventListener('click', closemodle);

itembox.addEventListener('click', function (e) {
    e.stopPropagation()
})


function openitem() {
    containerbox.style.display = 'flex'
}
let globalindex = 0
for (let i = 0; i < imgsa.length; i++) {
    imgsa[i].addEventListener('dblclick', function (e) {
        globalindex = i
        itembox.style.backgroundImage = `url(${e.target.getAttribute('src')})`;
        openitem();
    })
}
document.addEventListener('keybown', function (e) {
    console.log(e.key)
    if (e.key == 'ArrowRight') {
        nextimg();
    }

});

function nextimg() {
    globalindex++
    if (globalindex == imgsa.length) {
        globalindex = 0
    }
    itembox.style.backgroundImage = `url(${imgsa[globalindex].getAttribute('src')})`;

}

function previsimg() {
    globalindex--
    // globalindex =-1
    if (globalindex < 0) {

        globalindex = imgsa.length - 1
    }
    itembox.style.backgroundImage = `url(${imgsa[globalindex].getAttribute('src')})`;
}
next.addEventListener('click', nextimg)
previs.addEventListener('click', previsimg);