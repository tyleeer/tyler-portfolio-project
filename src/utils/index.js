export function scrollToPage(page) {
  const toPage = document.getElementById(page);
  toPage.scrollIntoView();
}

export function changeTheme() {
  const bgEle = document.getElementById("background");
  const containerEle = document.getElementById("container");
  const testEle = document.getElementById("test");

  if (containerEle) {
    containerEle.classList.contains("dark")
      ? testEle.classList.replace("testEnlarge", "testLighten")
      : testEle.classList.replace("testLighten", "testEnlarge");

    containerEle.classList.contains("dark")
      ? (containerEle.classList.remove("dark"),
        bgEle.classList.replace("enlarge", "lighten"))
      : (containerEle.classList.add("dark"),
        bgEle.classList.replace("lighten", "enlarge"));
  }
}

export function navHanddler() {
  const containerEle = document.getElementById("container");
  const navBarEle = document.getElementById("navBar");
  const homeHeight = document.getElementById("homePage").clientHeight - 100;
  const bannerEle = document.getElementById("banner");

  containerEle.scrollTop > homeHeight
    ? navBarEle.classList.replace("translate-y-[-20dvh]", "translate-y-0")
    : navBarEle.classList.replace("translate-y-0", "translate-y-[-20dvh]");

  containerEle.scrollTop > homeHeight
    ? bannerEle.classList.add(
        "bg-[rgb(255,255,255,0.7)]",
        "dark:bg-[rgb(24,0,24,0.7)]",
        "backdrop-blur-[4px]"
      )
    : bannerEle.classList.remove(
        "bg-[rgb(255,255,255,0.7)]",
        "dark:bg-[rgb(24,0,24,0.7)]",
        "backdrop-blur-[4px]"
      );
}
