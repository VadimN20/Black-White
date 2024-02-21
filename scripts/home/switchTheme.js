const darkTheme = "dark-theme";
const lightTheme = "light-theme";
const darkBtn = "dark-btn";
const darkShadow = "d-shadow";
const lightShadow = "l-shadow";

let userThemeIsDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userThemeIsDark) {
  document.body.classList.add(darkTheme);
  document.querySelector(".header").classList.add(darkTheme);
  [...document.getElementsByClassName("theme")].forEach((i) =>
    i.classList.add(darkTheme)
  );

  [...document.getElementsByClassName("sh")].forEach((i) => {
    i.classList.add(darkShadow);
  });

  console.log(document.querySelector(".btn_switch_theme"));
  document.querySelector(".btn_switch_theme").classList.add(darkBtn);
  userThemeIsDark = !userThemeIsDark;
}

const btnSwitch = document.querySelector(".btn_switch_theme");

btnSwitch.addEventListener("click", () => {
  if (userThemeIsDark) {
    document.body.classList.add(darkTheme);
    document.body.classList.remove(lightTheme);

    [...document.getElementsByClassName("theme")].forEach((i) => {
      i.classList.remove(lightTheme);
      i.classList.add(darkTheme);
    });

    [...document.getElementsByClassName("sh")].forEach((i) => {
      i.classList.add(darkShadow);
      i.classList.remove(lightShadow);
    });

    document.querySelector(".btn_switch_theme").classList.add(darkBtn);
    document.querySelector(".btn_switch_theme").classList.remove(lightTheme);

    userThemeIsDark = !userThemeIsDark;
  } else {
    document.body.classList.add(lightTheme);
    document.body.classList.remove(darkTheme);
    document.querySelector(".header").classList.add(lightTheme);
    document.querySelector(".header").classList.remove(darkTheme);

    [...document.getElementsByClassName("theme")].forEach((i) => {
      i.classList.add(lightTheme);
      i.classList.remove(darkTheme);
    });

    [...document.getElementsByClassName("sh")].forEach((i) => {
      i.classList.remove(darkShadow);
      i.classList.add(lightShadow);
    });

    document.querySelector(".btn_switch_theme").classList.add(lightTheme);
    document.querySelector(".btn_switch_theme").classList.remove(darkBtn);
    userThemeIsDark = !userThemeIsDark;
  }
});
