

const ProductPage = {
    render:() => {
        return `
          <div  class="product-page-section">
             <div class="back-to-results">
                <a href="/#/"><p>Back To Reults</p></a>
             </div>

      <div class="product-page-content">       
         <div class="product-page-content-img">
             <div class="product-img-section">
                <ul>
                  <li><img src="/Images/Gundams/00Gundam_perfectGrade-00Riser.png" alt="/" /></li>
                  <li><img src="/Images/Gundams/00Gundam_perfectGrade-00Riser.png" alt="/" /></li>
                  <li><img src="/Images/Gundams/00Gundam_perfectGrade-00Riser.png" alt="/" /></li>
                  <li><img src="/Images/Gundams/00Gundam_perfectGrade-00Riser.png" alt="/" /></li>
                </ul>
             </div>
                <div class="product-img-section2">
                   <img src="/Images/Gundams/00Gundam_perfectGrade-00Riser.png" alt="/"/>
                </div>
             </div>

                 <div class="product-page-content-details">
                    <ul>
                        <li><h1>Gumdam: Astray Blue Flame D Action MG</h1></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><ul>
                            <li><h3>$346.00 CAN</h3></li>
                            <li><p>Price + Shipping Here:</p></li>
                            <li><p>Brand Here:</p></li>
                            <li><p>Model Name Here:</p></li>
                        </ul></li>
                        <li><ul>
                                  <h3>Description:</h3>
                             <li><p>Description Here:</p></li>
                             <li><p>Description Here:</p></li>
                             <li><p>Description Here:</p></li>
                             <li><p>Description Here:</p></li>
                        </ul></li>
                      <li><p>Tools Required To Build Here:</p></li>
                    </ul>
                 </div>

                 <div class="product-page-content-purchase">
                    <ul>
                        <li><h3>Price Without Tax Here:</h3></li>
                        <li><p>Delivery Arrival Estimate Here:</p></li>
                        <li><button class="purchase-button-add-to-cart">Add To Card</button></li>
                        <li><button class="purchase-button-buy-now">Buy Now</button></li>
                        <li><p>List Item Here:</p></li>
                    </ul>
                 </div>

             </div>
        </div>
      `
    },
};

export default ProductPage