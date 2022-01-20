import data from "../Components/Data/gallery.js";

const Gallery = {

   after_render_buildGalleryTable:()=>{
          const { galleryTables } = data;
          const gallery = {"querySet": galleryTables, "page": 1, "rows": 5 } 

    const galleryPagination = (querySet, page, rows) =>{
         const trimGalleryStart = (page - 1) * rows;
         const trimGalleryEnd = trimGalleryStart + rows;
         const galleryTrimmedData = querySet.slice(trimGalleryStart, trimGalleryEnd);
         const pages = Math.ceil(querySet.length / rows);

     return{
             "querySet": galleryTrimmedData,
             "pages": pages
         }
    };


    const buildGalleryTable = () =>{
             const galleryTable = document.getElementById("gallery-table-body");
             const paginationGalleryData = galleryPagination(gallery.querySet, gallery.page, gallery.rows);
           
             console.log(paginationGalleryData)
             
             const myGallery = paginationGalleryData.querySet
              console.log(myGallery); 

            const row = `${myGallery.map((gallery) =>`
                          <thead>
                                 <tr>
                                    <th>Id:</th>
                                    <th>Name:</th>
                                    <th>Image:</th>
                                    <th>Price:</th>
                                    <th>Ratings:</th>
                                 </tr>
                              <thead>   
                        <tr>
                            <td>${gallery._id}</td>
                            <td>${gallery.name}</td>
                            <td><img src="${gallery.image}" alt="${gallery.name}"/></td>
                            <td>${gallery.price}</td>
                            <td>${gallery.ratings}</td>
                        </tr>
            `)}
            
            `
              galleryTable.append(row);
            //  for(let i = 1; i < myGallery.length; i++){
            //       const row = `<tr>
            //                 <td>${myGallery[i]._id}</td>
            //                 <td>${myGallery[i].name}</td>
            //                 <td><img src="${myGallery[i].image}" alt="${myGallery[i].name}"/></td>
            //                 <td>${myGallery[i].price}</td>
            //                 <td>${myGallery[i].ratings}</td>`
            //     galleryTable.append(row)   
            //  }
               
             }
    buildGalleryTable()
 

   },

    render:() => {  
      
       return `
          <div class="gallery-body" id="gallery-body">
                   <div class="gallery-section"> 
                       <div class="gallery-content">

               <table class="gallery-table" id="gallery-table">
                                                         
                     <tbody id="gallery-table-body" class="gallery-tbody"></tbody>               
                </table>

                       <div class="gallery-content2">
                           <div id="pagination-gallery-wrapper-btns"></div>
                       </div>
                       
                    </div>

                   </div>
             </div>        
         `
    },
};

export default Gallery;