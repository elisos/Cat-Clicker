class CatClicker {
    constructor (name, pic){
        this.name = name;
        this.pic = pic; 
        this.innerHTML = "<div>
                    <p class="catName"></p>
                    <img src="" alt="cat head" class="catImage">
                    <p class="counter">0</p>
                </div>";
    }
    
    function nameMe () {
        let catName = document.getElementsByClassName('catName').innerText;         
        catName = this.name;
    }
    
    function picMe () {
        let catPic = document.getElementsByClassName('catImage');
        catPic.setAttribute(src, this.pic);
    }
    
    function catClick() {
        const counter = document.getElementsByClassName('counter');
        let counterNumber = 0;
        this.pic.addEventListener('click', catClick);
        ++counterNumber;
        counter.innerHTML= counterNumber;
    };
}


let cat1 = new CatClicker('Briscuit', "japanese-bobtail.png");
let cat2 = new CatClicker('Ginger', "turkish-van.png");
let catArray = [cat1, cat2];
const catNode = document.getElementById('catNode');

for (cat of catArray){
    catNode.appendChild(cat);
};
