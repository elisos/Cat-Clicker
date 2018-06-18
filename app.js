let catName = document.querySelector('#catName');
const catImages = document.querySelectorAll('.catImage');
let imageArray = [...catImages];


const menu = document.getElementById("catNav");
const catTabs = menu.querySelectorAll("li");
const tabArray = [...catTabs];

menu.addEventListener("click", chooseCat);
function chooseCat(e) {
   for (tab of tabArray){
       tab.classList.remove('active');
       e.target.classList.add('active');  
   }
    let activeCat = menu.querySelector('.active').innerHTML;
    catName.innerHTML = activeCat;
    
    let catSelfie = menu.querySelector('.active');    
    let catId = catSelfie.getAttribute("id"); 
    for (image of imageArray) {
        image.classList.remove('focus');
        if (image.classList.contains(catId)){
            image.classList.add('focus');
        }
    }
}

const counter = document.getElementById('counter');
counter.innerText = 0;
clickCount = 0;
const imageList = document.getElementById('imageList');
const catPics = imageList.querySelectorAll('li');
const picArray = [...catPics];
function catClick () {
    imageList.addEventListener('click', function (e) {
        ++e.target.clickCount;
        counter.innerText= e.target.clickCount;
        e.target.classList.add('animated', 'pulse');
        setTimeout(function () {
            e.target.classList.remove('animated', 'pulse');
        }, 200);
    }
    });
};
catClick();
        
//class Cat {
//    constructor (pic, clickCount = 0) {
//        this.pic = pic; 
//        this.clickCount = clickCount;
//    }
//    
//    catClick() {
//        this.pic.addEventListener('click', function (picCopy) {
//                ++this.clickCount;
//                counter.innerText= this.clickCount;
//                catImage.classList.add('animated', 'pulse');
//                setTimeout(function () {
//                    catImage.classList.remove('animated', 'pulse');
//                }, 200);
//    }
//}
//const gingerImg = document.getElementsByClassName('ginger');
//const biscuitImg = document.getElementsByClassName('biscuit');
//const snowyImg = document.getElementsByClassName('snowy');
//const goblinImg = document.getElementsByClassName('goblin');
//const mitziImg = document.getElementsByClassName('mitzi');
//const gingkoImg = document.getElementsByClassName('gingko');
//
//let biscuitCat = new Cat(biscuitImg);
//let gingerCat = new Cat(gingerImg);
//let snowyCat = new Cat(snowyImg);
//let goblinCat = new Cat(goblinImg);
//let mitziCat = new Cat(mitziImg);
//let gingkoCat = new Cat(gingkoImg);
//
//let catArray = [biscuitCat, gingerCat, snowyCat, goblinCat, mitziCat, gingkoCat];
//        
//for (cat of catArray) {
//    cat.catClick();
//}
////
//
//let biscuit = new Cat('Biscuit', "biscuit.png");
//let ginger = new Cat('Ginger', "ginger.png");
////let snowy = new Cat('Snowy', "<img src="snowy.png" alt="cat head" id="snowyImage" class="catImage">", tabArray[2]);
////let goblin = new Cat('Goblin', "<img src="goblin.png" alt="cat head" id="goblinImage" class="catImage">", tabArray[3]);
////let mitzi = new Cat('Mitzi', "<img src="mitzi.png" alt="cat head" id="mitziImage" class="catImage">", tabArray[4]);
////let gingko = new Cat('Gingko', "<img src="gingko.png" alt="cat head" class="catImage" id="gingkoImage">", tabArray[5]);

//
////for (cat of catArray){
////    cat.populate();
//////    cat.catClick();
////};
//
////"<img src=/"biscuit.png/" alt=/"cat head/" id=/"biscuitImage/" class=/"catImage/">"
////"<img src="ginger.png" alt="cat head" id="gingerImage" class="catImage">",