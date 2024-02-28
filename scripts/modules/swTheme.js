const darkTheme = "dark-theme";
const lightTheme = "light-theme";
const shadowDark = "sh-dark";
const shadowLight = "sh-light";
const darkThemeInfo = "dark-theme-hInfo";
const lightThemeInfo = "light-theme-hInfo";

let userThemeIsDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function startTheme() {
  if (userThemeIsDark) {
    [...document.getElementsByClassName("hideInfo")].forEach((i) => {
      i.classList.add(lightThemeInfo);
      i.classList.remove(darkThemeInfo);
    });
    [...document.getElementsByClassName("theme")].forEach((i) => {
      i.classList.add(darkTheme);
      i.classList.remove(lightTheme);
    });
    [...document.getElementsByClassName("sh")].forEach((i) => {
      i.classList.add(shadowDark);
      i.classList.remove(shadowLight);
    });
    userThemeIsDark = !userThemeIsDark;
  } else {
    [...document.getElementsByClassName("hideInfo")].forEach((i) => {
      i.classList.add(darkThemeInfo);
      i.classList.remove(lightThemeInfo);
    });
    [...document.getElementsByClassName("theme")].forEach((i) => {
      i.classList.add(lightTheme);
      i.classList.remove(darkTheme);
    });
    [...document.getElementsByClassName("sh")].forEach((i) => {
      i.classList.add(shadowLight);
      i.classList.remove(shadowDark);
    });
    userThemeIsDark = !userThemeIsDark;
  }
}

function switchTheme() {
  return startTheme();
}

export { switchTheme, startTheme };
