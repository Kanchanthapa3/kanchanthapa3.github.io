// array of image urls
const imageUrls =[
    "sunflower.jpg",
    "trees.jpg",
    "clouds.jpg",
];
let selectedIndex =0;
let img = document.getElementById("current-image");console.log(img);
img.src = imageUrls[selectedIndex];
function next (){
    if (selectedIndex < imageUrls.length -1){
        selectedIndex += 1;
        img.src= imageUrls[selectedIndex];
    }
}
function previous(){
    if(selectedIndex >0)
    selectedIndex -=1;
img.src= imageUrls[selectedIndex];
}