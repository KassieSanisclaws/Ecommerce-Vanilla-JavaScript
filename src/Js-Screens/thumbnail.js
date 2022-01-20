import data from "../Components/Data/thumbnail.js";

const Thumbnail = {
   after_render_sliderAutoPlay:() =>{
      const thumbnailSlider = document.getElementById("thumbnail-products");
      const thumbnailSliderMaxLeftScroll = thumbnailSlider.scrollWidth - thumbnailSlider.clientWidth;

      
 function thmubnailAutoPlay(){
         if(thumbnailSlider.scrollLeft < (thumbnailSliderMaxLeftScroll - 1)){
            thumbnailSlider.scrollLeft -= thumbnailSliderMaxLeftScroll
         }else{
            thumbnailSlider.scrollLeft += 1; 
         }
      };

   },

  after_render_right_arrow:() => {
     const arrowRight = document.getElementById("arrow-right");
     const thumbnailSlider = document.getElementById("thumbnail-products");
    

     arrowRight.addEventListener("click", () =>{
        thumbnailSlider.scrollLeft += 225;
     });
  },
  
  after_render_left_arrow:() => {
     const arrowLeft = document.getElementById("arrow-left");
     const thumbnailSlider = document.getElementById("thumbnail-products");

     arrowLeft.addEventListener("click", () =>{ 
        thumbnailSlider.scrollLeft -= 225; 
     }); 
  },

    render:() => {     
        const { thumbnailProducts } = data;
        return `
        <img id="arrow-left" class="arrow-left" src="/Images/Buttons/arrow_button_left2.png" alt="arrow-left"/>
         <div class="thumbnail-products" id="thumbnail-products">    
              ${thumbnailProducts.map((thumbnailProduct => `  
            <section class="thumbnail-product" id="thumbnail-slider">            
               <div class="thumbnail-img">
                 <a href="/#/thumbnailProduct/${thumbnailProduct._id}"><img src="${thumbnailProduct.image}" alt="${thumbnailProduct.name}"/></a>
                   <div class="thumbnail-details">
                     <div class="thumbnail-name">
                        <a href="/#/thumbnailProduct/${thumbnailProduct.name}">${thumbnailProduct.name}</a>
                          </div>
                            <div class="thumbnail-ratings">${thumbnailProduct.ratings}
                        </div>
                     </div>  
                </section> 
               
           `)).join("")} 
         <img id="arrow-right" class="arrow-right" src="/Images/Buttons/arrow_button_right.png" alt="arrow-right"/>      
       `;
       

    },
    
};

export default Thumbnail;
