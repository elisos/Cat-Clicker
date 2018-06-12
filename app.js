const catName = document.getElementById('catName').innerText;
const catImage = document.getElementsByClassName('catImage');
const counter = document.getElementById('counter');
counter.innerText = 0;
const menu = document.getElementById("catNav");
const catTabs = menu.querySelectorAll("li");
const tabArray = [...catTabs];

menu.addEventListener("click", chooseCat);

function chooseCat(e) {
   for (tab of tabArray){
       tab.classList.remove('active');
   }
        e.target.classList.add('active');
}

class Cat {
    constructor (name, pic, clickCount = 0, tab) {
        this.name = name;
        this.pic = pic; 
        this.clickCount = clickCount;
        this.tab = tab;
    }
    
    populate() {
        menu.addEventListener('click', function(e) {
            if (e.target === this.tab){
            catName = this.name;
            catImage.setAttribute('src', this.pic);
//            this.nameMe();
//            this.picMe();
            }
        });
    }
    
//    nameMe() {
//        catName = this.name;
//    }
//    
//    picMe() {
//        catImage.setAttribute('src', this.pic);
//    }
    
    catClick() {
        catImage.addEventListener('click', function (picCopy) {
            return function () {
                ++this.clickCount;
                counter.innerText= this.clickCount;
                catImage.classList.add('animated', 'pulse');
                setTimeout(function () {
                    catImage.classList.remove('animated', 'pulse');
                }, 200);
            };
        })(this.pic);
    }
}
//
//
let biscuit = new Cat('Biscuit', "biscuit.png", tabArray[0]);
//let ginger = new Cat('Ginger', "ginger.png",  tabArray[1]);
//let snowy = new Cat('Snowy', "<img src="snowy.png" alt="cat head" id="snowyImage" class="catImage">", tabArray[2]);
//let goblin = new Cat('Goblin', "<img src="goblin.png" alt="cat head" id="goblinImage" class="catImage">", tabArray[3]);
//let mitzi = new Cat('Mitzi', "<img src="mitzi.png" alt="cat head" id="mitziImage" class="catImage">", tabArray[4]);
//let gingko = new Cat('Gingko', "<img src="gingko.png" alt="cat head" class="catImage" id="gingkoImage">", tabArray[5]);
let catArray = [biscuit, ginger, snowy, goblin, mitzi, gingko];

for (cat of catArray){
    cat.populate();
//    cat.catClick();
};

//"<img src=/"biscuit.png/" alt=/"cat head/" id=/"biscuitImage/" class=/"catImage/">"
//"<img src="ginger.png" alt="cat head" id="gingerImage" class="catImage">",