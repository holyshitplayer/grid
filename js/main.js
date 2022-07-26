document.addEventListener("DOMContentLoaded", () => {
    const menu = new MmenuLight(
        document.querySelector(".menu"),
        "(max-width: 992px)"
    );
    const navigator = menu.navigation({
        theme: "dark",
        title: "Меню",
    });
    const drawer = menu.offcanvas();
    document.querySelector(".open-menu-button").addEventListener("click", (e) => {
        e.preventDefault();
        drawer.open();
    });
    document.querySelector(".close-menu-button").addEventListener("click", (e) => {
        e.preventDefault();
        drawer.close();
    });
});
