$('.sponsor-carousel').slick({
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
         
        ]
      });



      $('.team-carousel').slick({
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
    
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  
                }
              },
        
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              
            ]
          });