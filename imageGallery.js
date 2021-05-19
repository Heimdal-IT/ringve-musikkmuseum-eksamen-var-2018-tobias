
const galleryImages = [
    "ringve-musikkmuseum-eksamen-var-2018-tobias-main/V2018-Museum-filer/intro1.jpg" ,
    "ringve-musikkmuseum-eksamen-var-2018-tobias-main/V2018-Museum-filer/intro2.jpg" ,
    "ringve-musikkmuseum-eksamen-var-2018-tobias-main/V2018-Museum-filer/intro3.jpg" ,
    "ringve-musikkmuseum-eksamen-var-2018-tobias-main/V2018-Museum-filer/intro4.jpg"
];
const galleryImg = document.getElementById("galleryImg");

const btnPrev = document.querySelector(".prevImg");
const btnNext = document.querySelector(".nextImg");
const radioCont = document.querySelector(".galleryRadios");


let galleryIndex = 0;

function galleryPrevImg() {
    galleryIndex -= 1;
    gallerySetImg();
};
function galleryNextImg() {
    galleryIndex += 1;
    gallerySetImg();
};

function gallerySetImg(n) {
    if (n || n === 0) {
        galleryIndex = n
    };
    if (galleryIndex >= galleryImages.length) {
        galleryIndex = 0;
    }
    if (galleryIndex < 0) {
        galleryIndex = galleryImages.length - 1;
    }

    galleryImg.setAttribute("src", galleryImages[galleryIndex]);
    galleryRadios[galleryIndex].checked = true;
};


btnPrev.addEventListener("click", galleryPrevImg);
btnNext.addEventListener("click", galleryNextImg);

for (i = 0; i < galleryImages.length; i++) {
    let btn = document.createElement("input");
    btn.setAttribute("type", "radio");
    btn.setAttribute("name", "gallery");
    radioCont.appendChild(btn);
    
    let n = i;
    btn.addEventListener("click", function(){
        gallerySetImg(n);
    });
};


const galleryRadios = document.querySelectorAll("input[name=\"gallery\"]");
gallerySetImg();