//a feature that hides navigation bar on down-scroll and shows again when scrolled up

const NavBarScroll = () => {
  //hiding navbar on scroll
  const menubar = document.getElementById("menubar");
  let prevScrollValue = window.scrollY;
  window.addEventListener("scroll", () => {
    if (prevScrollValue < window.scrollY) {
      // console.log("down");
      menubar.classList.add("hideOnScroll"); //did not work using menubar
      // document.getElementById('menubar').classList.add('hideOnScroll');
    } else {
      // console.log("up");
      menubar.classList.remove("hideOnScroll"); //did not work using menubar
      // document.getElementById('menubar').classList.remove('hideOnScroll');
    }
    prevScrollValue = window.scrollY;
  });
};

export default NavBarScroll;
