import gallery from "./Components/Data/gallery.js";
import AboutUs from "./Js-Screens/aboutus.js";
import Blog from "./Js-Screens/blog.js";
import ContactUs from "./Js-Screens/contactus.js";
import Footer from "./Js-Screens/footer.js";
import Gallery from "./Js-Screens/gallery.js";
import HomePage from "./Js-Screens/homePage.js";
import NotFoundPage404 from "./Js-Screens/notFoundPage404.js";
import ProductPage from "./Js-Screens/productPage.js";
import Thumbnail from "./Js-Screens/thumbnail.js";
import { parseRequestUrl } from "./utils.js";


const routes = {
    "/": HomePage,
    "/product/:id": ProductPage,
    "/gallery": Gallery,
    "/aboutus": AboutUs,
    "/contactus": ContactUs,
    "/blog": Blog,
    "/thumbnail": Thumbnail,
    "/notFoundPage404": NotFoundPage404,
};

const router = () => {
      const request = parseRequestUrl();
      const parseUrl = (request.resource ? `/${request.resource}` : "/" ) + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : "");
      const screen = routes[parseUrl] ? routes[parseUrl] : NotFoundPage404;
      const main = document.getElementById("main-container");

      main.innerHTML = screen.render();
       Gallery.after_render_buildGalleryTable();
       
      //  screen.after_render();

    // const screenLocation = window.location.hash
    // const screen = routes;

    // switch (screenLocation) {
    //     case "#/gallery":
    //         main.innerHTML = screen["/gallery"].render();
    //         break;
    //     case "#/aboutus":
    //         main.innerHTML = screen["/aboutus"].render();
    //         break;
    //     case "#/contactus":
    //         main.innerHTML = screen["/contactus"].render();
    //         break;
    //     case "#/blog":
    //         main.innerHTML = screen["/blog"].render();
    //         break;
    //     default:
    //         main.innerHTML = screen["/notFoundPage404"].render();
    //         break;
    // }
}

const thumbnailRouter = () =>{
//   const request = parseRequestUrl();
//   const parseUrl = (request.resource ? `/${request.resource}` : "/" ) + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : "");
//   const screen = routes[parseUrl] ? routes[parseUrl] : NotFoundPage404;
const thumbnail = document.getElementById("thumbnail-slider");
   thumbnail.innerHTML = Thumbnail.render();
   Thumbnail.after_render_sliderAutoPlay();
   Thumbnail.after_render_left_arrow();
   Thumbnail.after_render_right_arrow();
   
}

const footerRouter = () => {
    const footer = document.getElementById("footer-section");
    footer.innerHTML = Footer.render();
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
window.addEventListener("load", thumbnailRouter);
window.addEventListener("load", footerRouter);
// window.addEventListener("hashchange", thumbnailRouter);




