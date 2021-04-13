$(document).ready(function(){
  $('#owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        
    }
    
})

});

$(document).ready(function() {
 
    var owl = $("#owl-demo");
   
    owl.owlCarousel({
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('#our-partners').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
   
  
   
  });

$(document).ready(function($){
  $('.stomatology-button').on({
      'click':function(){
          $('#change-image').attr('src','./assets/images/stomatology.png');
          $('#change-title').text("Merhaba");
          $('#change-subtitle').text("Merhabalar 2");
      }
  });

  
});

$(document).ready(function(){
    $('#about-page').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
            items:2
        }
          
      }
      
  })
  
  });


