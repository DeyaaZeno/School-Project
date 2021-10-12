
let navColor = () =>{
    const navbar = document.querySelector('.page-header .navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', navColor);

let goUp = () => {
    const upBtn = document.querySelector('.page-header .up-btn');
    upBtn.classList.toggle('active', window.scrollY > 50);
}

window.addEventListener('scroll', goUp)


const menuToggle = document.querySelector('.navbar .btn.menu');
const navigation = document.querySelector('.navbar .navigation');
const sectionUser = document.querySelector('.navbar .sec-user');
let toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sectionUser.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu)


var li = [$('.num-one'), $('.num-two'), $('.num-three')]; 
var waypoint = new Waypoint({
    element: document.getElementById('success'),
    handler: function(down){
        $.each(li, function (k,val){
            var value = val.attr('data-nums');
            var options = {};
            options ['toValue'] = value;
            options ['duration'] = 8000;
            val.numerator(options);
        });      
    }, offset: '70%'
});