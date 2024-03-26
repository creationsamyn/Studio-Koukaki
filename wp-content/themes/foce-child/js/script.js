
// ---------- Burger Menu ----------
//console.log("test du script !");
document.addEventListener("DOMContentLoaded", function () {
  script();
});

function script() {
  (function($) {
    console.log("script");
    $(".burger-open").click(function() {
      if ($(".burger-menu").hasClass("active")) {
        $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
        $(".burger-menu").removeClass("active");
        $(".burger-close-modal").removeClass("close active");
        $(".line").removeClass("open");
        $(".closeCross").removeClass("open");  
      }
      else {
        $(".line").addClass("open");
        $(".closeCross").addClass("open");
        console.log("burger-open-click click");
        $(".burger-menu").animate({ height: "toggle", opacity: "toggle" }, 1000);
        $(".burger-menu").toggleClass("active");
        $(".burger-close-modal").toggleClass("close active");  
      }
    });

  let root = document.documentElement;
  let cloudPos = 0;
  let place = document.querySelector("#place");
  //animation fleur scroll
    window.addEventListener("scroll", function() {
      let vertical = -1;
      setInterval(function() {
        if(window.scrollY != vertical) {
          vertical = window.scrollY;
          root.style.setProperty("--rotate", "3s");
        }
        else {
          root.style.setProperty("--rotate", "13s");
        }
      }, 500);
      //animation nuage 
      cloudPos = Math.round(0 - (window.scrollY - place.offsetTop - 200));
      
      if (cloudPos <= 0 && cloudPos >= -400) {
        root.style.setProperty("--cloudPos", cloudPos + "px");
  
      }
  
    });
    const animeFirstPart = document.querySelectorAll(".anime_first");
    const animeScndPart = document.querySelectorAll(".anime_scnd");
    const animeSectionsPart = document.querySelectorAll(".anime_section");

    function animeFirst() {
      let observerFirst = new  IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("title_move_first");
            return;
          }
          entry.target.classList.remove("title_move_first");
        });
      });
        animeFirstPart.forEach((element) => {
          observerFirst.observe(element);
        });
      }

      function animeScnd() {
        let observerScnd = new  IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("title_move_scnd");
              return;
            }
            entry.target.classList.remove("title_move_scnd");
          });
        });
          animeScndPart.forEach((element) => {
            observerScnd.observe(element);
          });
        }

        function animeSections() {
          let observerSections = new  IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("section_move");
                return;
              }
              entry.target.classList.remove("section_move");
            });
          });
            animeSectionsPart.forEach((element) => {
              observerSections.observe(element);
            });
          }
    
          animeSections();
        animeFirst();
    animeScnd();

  })(jQuery);
}
/*
document.addEventListener("DOMContentLoaded", function() {
  const charactersHeadings = document.querySelectorAll('#characters h3, #place h3');

  function checkPositions() {
    const triggerBottom = window.innerHeight * 0.8;

    charactersHeadings.forEach(charactersHeading => {
      const charactersHeadingTop = charactersHeading.getBoundingClientRect().top;

      if (charactersHeadingTop < triggerBottom) {
        charactersHeading.classList.add('active');
      } else {
        charactersHeading.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', checkPositions);
  window.addEventListener('resize', checkPositions);

  checkPositions();
});

*/
