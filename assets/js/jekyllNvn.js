var jekyllNvn = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    setTimeout(jekyllNvn.initNavbar, 10);

    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
        }
        if ($(".dropdown").offset().top > 50) {
          $(".dropdown").removeClass("show");
        }
        if ($(".dropdown-menu-right").hasClass("show")) {
          $(".dropdown-menu-right").removeClass("show");
        }
    });
    //to open main menu on hover uncomment this.
    // $('#dropdown').hover(function() {
    //   $(this).AddClass('open');
    // })

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });

    // show the big header image
    jekyllNvn.initImgs();
  },

  initNavbar : function() {
    // Set the navbar-dark/light class based on its background color
    const rgb = $('.navbar').css("background-color").replace(/[^\d,]/g,'').split(",");
    const brightness = Math.round(( // http://www.w3.org/TR/AERT#color-contrast
      parseInt(rgb[0]) * 299 +
      parseInt(rgb[1]) * 587 +
      parseInt(rgb[2]) * 114
    ) / 1000);
    if (brightness <= 125) {
      $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
    } else {
      $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
    }
  },

  initImgs : function() {
    // If the page was large img to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      jekyllNvn.bigImgEl = $("#header-big-imgs");
      jekyllNvn.numImgs = jekyllNvn.bigImgEl.attr("data-num-img");

      // set an initial image
      var imgInfo = jekyllNvn.getImgInfo();
      var src = imgInfo.src;
      var desc = imgInfo.desc;
      jekyllNvn.setImg(src, desc);

      // For better UX, prefetch the next image so that it will already be loaded when we want to show it
      var getNextImg = function() {
        var imgInfo = jekyllNvn.getImgInfo();
        var src = imgInfo.src;
        var desc = imgInfo.desc;

        var prefetchImg = new Image();
        prefetchImg.src = src;
        // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

        setTimeout(function(){
          var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
          $(".intro-header.big-img").prepend(img);
          setTimeout(function(){ img.css("opacity", "1"); }, 50);

          // after the animation of fading in the new image is done, prefetch the next one
          //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          setTimeout(function() {
            jekyllNvn.setImg(src, desc);
            img.remove();
            getNextImg();
          }, 1000);
          //});
        }, 6000);
      };

      // If there are multiple img, cycle through them
      if (jekyllNvn.numImgs > 1) {
        getNextImg();
      }
    }
  },

  getImgInfo : function() {
    var randNum = Math.floor((Math.random() * jekyllNvn.numImgs) + 1);
    var src = jekyllNvn.bigImgEl.attr("data-img-src-" + randNum);
    var desc = jekyllNvn.bigImgEl.attr("data-img-desc-" + randNum);

    return {
      src : src,
      desc : desc
    }
  },

  setImg : function(src, desc) {
    $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
    if (typeof desc !== typeof undefined && desc !== false) {
      $(".img-desc").text(desc).show();
    } else {
      $(".img-desc").hide();
    }
  }
};

document.addEventListener('DOMContentLoaded', jekyllNvn.init);



// nav //
document.addEventListener("DOMContentLoaded", function(){
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {   
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });   
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              console.log(nextEl);
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end


// theme-button //

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.setAttribute('class', 'page-dark-mode');
    }
    else {
        document.body.setAttribute('class', '');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.body.setAttribute('class', 'page-dark-mode');
      localStorage.setItem('theme', 'page-dark-mode'); //add this
  }
  else {
      document.body.setAttribute('class', '');
      localStorage.setItem('theme', ''); //add this
  }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.body.setAttribute('class', currentTheme);

    if (currentTheme === 'page-dark-mode') {
        toggleSwitch.checked = true;
    }
}