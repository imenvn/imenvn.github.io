// // const btn = document.querySelector(".btn-toggle");
// // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// // btn.addEventListener("click", function () {
// //   if (prefersDarkScheme.matches) {
// //     document.body.classList.toggle("theme-light");
// //   } else {
// //     document.body.classList.toggle("theme-dark");
// //   }
// // });

// // const currentTheme = localStorage.getItem("theme");
// // if (currentTheme == "dark") {
// //   document.body.classList.add("theme-dark");
// // }

// // btn.addEventListener("click", function() {
// //   document.body.classList.toggle("theme-dark");

// //   let theme = "light";
// //   if (document.body.classList.contains("theme-dark")) {
// //     theme = "dark";
// //   }
// //   localStorage.setItem("theme", theme);
// // });

// // if (currentTheme == "light") {
// //     document.body.classList.add("theme-light");
// //   }
  
  
// //   btn.addEventListener("click", function() {
// //     document.body.classList.toggle("theme-light");
  
// //     let theme = "dark";
// //     if (document.body.classList.contains("theme-light")) {
// //       theme = "light";
// //     }
// //     localStorage.setItem("theme", theme);
// //   });





// // function to set a given theme/color-scheme
// function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
// }
// // function to toggle between light and dark theme
// function toggleTheme() {
//    if (localStorage.getItem('theme') === 'theme-dark'){
//        setTheme('theme-light');
//    } else {
//        setTheme('theme-dark');
//    }
// }
// // Immediately invoked function to set the theme on initial load
// (function () {
//    if (localStorage.getItem('theme') === 'theme-dark') {
//        setTheme('theme-dark');
//    } else {
//        setTheme('theme-light');
//    }
// })();
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}