function openPopup(imageItem, text){
   document.getElementById('imagesContiner').style.display = 'none';
   document.getElementById('popup-text').innerText = text;
   document.getElementById('popup-img').src = imageItem;
   document.getElementById('popup').style.display = 'grid';
   document.getElementById('menu').style.display = 'none';
}

function closePopup(){
   document.getElementById('imagesContiner').style.display = 'grid';
   document.getElementById('popup').style.display = 'none';
   document.getElementById('menu').style.display = '';
}