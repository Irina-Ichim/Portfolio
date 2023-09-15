let design = document.querySelector('.design');
for ( let i = 1; i <= 900; i++){
    let dot = document.createElement('div');
    dot.classList.add('element');
    design.appendChild(dot);
}
let grid = [30,30];

let dotAll = document.querySelectorAll('.element'); 
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true, 
})

animation
.add({
    rotate: function(){ return anime.random(-360, 360)},
    translateY: function(){return anime.random(-150,150)},
    translateX: function(){return anime.random(-150,150)},
    delay: anime.stagger(100,{grid:grid, from:''}),
    keyframes : [
        {
            background: '#de43ba'
        },
        {
            background: '#a32b95'
        },
        {
            background: '#8d167a'
        },
        {
            background: '#de43ba'
        },
        {
            background: '#f06cc0'
        },
        {
            background: '#d669b9'
        },
    ]
})
.add({
    rotate: function(){ return anime.random(0, 0)},
    translateY: function(){return anime.random(0, 0)},
    translateX: function(){return anime.random(0,0)},
    delay: anime.stagger(100,{grid:grid, from:'last'}),
    keyframes : [
        {
            background: '#de43ba'
        },
        {
            background: '#a32b95'
        },
        {
            background: '#8d167a'
        },
        {
            background: '#de43ba'
        },
        {
            background: '#f06cc0'
        },
        {
            background: '#d669b9'
        },
    ]
})


