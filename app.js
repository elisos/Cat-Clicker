class CatClicker {
    constructor (name, pic){
        this.name = name;
        this.pic = pic; 
    }
    
    buildCat() {
        const catDiv = document.createElement('DIV');
        const divName = document.createElement('P').setAttribute("class","catName");
        const divPic = document.createElement('IMG').setAttribute("class","catImage");
        const divCounter = document.createElement('P').setAttribute("class","counter");
        catDiv.append(divName, divPic, divCounter);
    }
    
    nameMe() {
        let catName = this.getElementsByClassName('catName').innerText;         
        catName = this.name;
    }
    
    picMe() {
        let catPic = document.getElementsByClassName('catImage');
        catPic.setAttribute("src", this.pic);
        catPic.setAttribute("alt", "cat head");
    }
    
    catClick() {
        const counter = this.getElementsByClassName('counter');
        counter.innerText = 0;
        let counterNumber = 0;
        const catImage = this.getElementsByClassName('catImage');
        catImage.addEventListener('click', function () {
        ++counterNumber;
        counter.innerHTML= counterNumber;
        });
    }
}


let cat1 = new CatClicker('Biscuit', "japanese-bobtail.png");
let cat2 = new CatClicker('Ginger', "turkish-van.png");
let catArray = [cat1, cat2];
        
const catNode = document.getElementById('catNode');

for (cat of catArray){
    cat.buildCat();
    cat.nameMe();
    cat.picMe();
    cat.catClick();
    catNode.appendChild(cat);
};
