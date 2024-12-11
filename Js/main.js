// Initialize and add the map
      function initMap() {
        // your location
        const loc = {lat: 42.361145, lng: -71.057083};
        // centered map on location 
        const map = new google.maps.Map(document.querySelector('.map'), {
          center: loc,
          zoom: 14});
          // The marker, positioned at location 
          const marker = new google.maps.marker({position:loc, map:map});
        }
// sticky menu background 
window.addEventListener('scroll', function(){
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else{
    document.querySelector('#navbar').style.opacity = 1;
  }
});
// Smooth scrolling
$('#navbar a, .btn').on('click', function(event){
  if(this.hash  !==  ''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop:$(hash).offset().top - 100
      }, 800
    );
  }
});