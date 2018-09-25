$(document).ready(function(){

  $(function(){
  // 2. często korzystamy z listy w karuzeli, więc przypisujemy ją do zmiennej
  var carouselList = $('#carousel ul');
      
  // 3. karuzela działa na zasadzie interwału. Tutaj zmiana slajdu następuje co 3000ms
  setInterval(changeSlide,3000);
  
  // 4. animacja polega na przesunięciu całej listy 500 px w lewo. Następuje to za sprawą ustawienia marginesu na -500px. Po animacji wykonuje się funkcja placeFirstSlideAfterLast, ktorej definicja znajduje sie ponizej
  function changeSlide(){
    carouselList
      .animate({marginLeft:-600}, 600, moveFirstSlide);
  }
  
  function moveFirstSlide(){
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
});
});