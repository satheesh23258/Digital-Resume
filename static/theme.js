const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        const newTheme = e.target.dataset.theme;

        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});

function getThemeOnLoad() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
    }
}

getThemeOnLoad();
