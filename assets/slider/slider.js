var img = 1;

slider = function (){
    var cn = ["./assets/img/sld4.jpg","./assets/img/sld.jpg",
    "./assets/img/sld1.jpg","./assets/img/sld2.jpg","./assets/img/sld3.jpg"];
    document.getElementById('pro').src = cn[img];
    img ++;
    if(img > 4){
        img = 1;
    }
    
}
setInterval(slider, 4000);