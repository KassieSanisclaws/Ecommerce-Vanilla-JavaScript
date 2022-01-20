import data from "../Components/Data/products.js";
import Ratings from "../Components/ratings.js";

const HomePage = {
    render:() => {
        const { products } = data;
        return `
           <ul class="products"> 
              ${products.map((product) => `
              <li>

                 <div class="product">
                    <a href="/#/product/${product._id}">
                       <img src="${product.image}" alt="${product.name}"/>
                     </a> 

                  <div class="product-name">
                      <a href="/#/product/1">
                          ${product.name}
                      </a>
                  </div>

                  <div class="product-brand">
                      ${product.grade}
                  </div>

                  <div class="product-ratings">
                        ${Ratings.render({value: product.ratings, text: `${product.numOfReviews} reviews`, })}
                  <div>

                  <div class="product-price">
                    ${product.price}
                  </div>

                </div>
              </li>
              `).join("")}
        `
    }
}

export default HomePage;