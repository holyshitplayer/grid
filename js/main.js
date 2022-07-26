// МОБИЛЬНОЕ МЕНЮ
document.addEventListener("DOMContentLoaded", () => {
    const menu = new MmenuLight(
        document.querySelector(".header__menu"),
        "(max-width: 992px)"
    );

    const navigator = menu.navigation({
        theme: "light",
        title: "Меню",
    });

    const drawer = menu.offcanvas();

    document.querySelector(".header__menu__open-menu").addEventListener("click", (e) => {
        e.preventDefault();
        drawer.open();
    });

    document.querySelector(".header__menu__close-menu").addEventListener("click", (e) => {
        e.preventDefault();
        drawer.close();
    });
});
