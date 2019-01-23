function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
}





    var i=0;//start point
var images=[];
var time=2000;
//Image List
images [0]='earth houses/download (1).jpg';
images [1]='interior.jpg';
images [2]='tropical houses/images (26).jpg';
images [3]='tropical houses/images (19).jpg';
images [4]='traditional houses/images (37).jpg';
images [5]='image(26).jpg';
images [6]='images (39).jpg';
images [7]='traditional houses/images (25).jpg';
images [8]='images(41).jpg';
images [9]='wooden.jpg';
images [10]='images (47).jpg';
images [11]='images (48).jpg';
images [12]='wh01.jpg';
images [13]='Static-House-00-3-728x1100.jpg';
images [14]='best.jpg';


//Change Image
function changeImg(){
    document.slide.src=images[i];

    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg;

$(document).ready(function(){
    $('button').click(function(){
        $('ol').toggleclass('active')
    })
})
