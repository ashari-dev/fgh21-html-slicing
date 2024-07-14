const navbarHome = document.getElementById("navbar-home");
const footer = document.getElementById("footer");

async function loadNavbarHome() {
  const response = await fetch("./assets/component/navbar-home.html");
  const data = await response.text();
  navbarHome.innerHTML = data;
  
  const btnLogin = document.getElementById("login");
  const hiddenMenu = document.getElementById("menu-hidden");
  const menu = document.getElementById("menu");
  const user = document.getElementById("user");

  hiddenMenu.onclick = () => {
    if (menu.getAttribute("style")) {
      menu.removeAttribute("style");
    } else {
      menu.setAttribute("style", "display: none");
    }
    if (user.getAttribute("style")) {
      user.removeAttribute("style");
    } else {
      user.setAttribute("style", "display: none");
    }
  };
  btnLogin.onclick=()=>{
    window.location="/signin.html"
  }
}
loadNavbarHome();
