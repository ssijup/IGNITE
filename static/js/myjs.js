

$('.plus-btn').click(function(){
    var id=$(this).attr("pid").toString();
    var eml= this.parentNode.children[1]
    console.log('pid=',id)
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            if ('prod_name' in data ){
            // document.getElementById("prod_name").innerText=data.prod_name

            alert('The product quantity limit reached')

            }else{
            console.log("data=",data);
            eml.innerText=data.quantity
            document.getElementById("proqty").innerText="x"+data.quantity
            document.getElementById("qty").innerText="Qty :"+data.quantity
            document.getElementById("amount").innerText="₹"+data.amount
            document.getElementById("totalamount").innerText="₹"+data.totalamount
            }
        }
    })
})



// discout price in grand total
$('.plus-bn').click(function(){
    var id=$(this).attr("pid").toString();
    var eml= this.parentNode.children[1]
    console.log('pid=',id)
    $.ajax({
        type:"GET",
        url:"/discount_showing",
        data:{
            prod_id:id
        },
        success:function(data){
            if ('prod_name' in data ){
            // document.getElementById("prod_name").innerText=data.prod_name

            alert('The product quantity limit reached')

            }else{
            console.log("data=",data);
            eml.innerText=data.quantity
            document.getElementById("amount").innerText="₹"+data.amount
            document.getElementById("totalamount").innerText="₹"+data.totalamount
            }
        }
    })
})





// Minus
$('.minus-btn').click(function(){
    var id=$(this).attr("pid").toString();
    var eml= this.parentNode.children[1]
    console.log('pid=',id)
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success:function(data){

            console.log("data=",data);
            if(data.removed){
                location.reload();
            }
            else{
            eml.innerText=data.quantity
            document.getElementById("proqty").innerText="x"+data.quantity
            document.getElementById("qty").innerText="Qty :"+data.quantity
            document.getElementById("amount").innerText="₹"+data.amount
            document.getElementById("totalamount").innerText="₹"+data.totalamount
            }
            
        }
    })
})




// productdetails quantity plus increment
$('.pluss-btnn').click(function(){
    console.log('start-plus')
    var id=$(this).attr("pid").toString();
    var eml= this.parentNode.children[1]
    console.log('pid=',id)
    
    $.ajax({
        type:"GET",
        url:"/product_pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            if ('prod_name' in data ){
            // document.getElementById("prod_name").innerText=data.prod_name
            console.log('end')
            alert('The product quantity limit reached')

            }else{
            console.log('oo')
            console.log("data=",data);
            eml.innerText=data.quantity
            // document.getElementById("amount").innerText="₹"+data.amount
            // document.getElementById("totalamount").innerText="₹"+data.totalamount
            }
        }
    })
})





// productdetails quantity MINS decrement
$('.minus-btnn').click(function(){
    var id=$(this).attr("pid").toString();
    var eml= this.parentNode.children[1]
    console.log('pid=',id)
    $.ajax({
        type:"GET",
        url:"/product_minuscart",
        data:{
            prod_id:id
        },
        success:function(data){

            console.log("data=",data);
            if(data.removed){
                location.reload();
            }
            else{
            eml.innerText=data.quantity
            document.getElementById("amount").innerText="₹"+data.amount
            document.getElementById("totalamount").innerText="₹"+data.totalamount
            }
            
        }
    })
})


// $('.minus-btn').click(function(){
//     var id=$(this).attr("pid").toString();
//     var eml= this.parentNode.children[1]
//     console.log('pid=',id)
//     $.ajax({
//         type:"GET",
//         url:"/minuscart",
//         data:{
//             prod_id:id
//         },
//         success:function(data){
//             if ('prod_name' in data ){
//             // document.getElementById("prod_name").innerText=data.prod_name
//             alert('the product limit reached')

//             }else{
//             console.log("data=",data);
//             eml.innerText=data.quantity
//             document.getElementById("amount").innerText=data.amount
//             document.getElementById("totalamount").innerText=data.totalamount
//             }
//         }
//     })
// })



// $('.minus-btn').click(function(){
//     var id = $(this).attr("pid").toString();
//     var eml = this.parentNode.children[1];

//     $.ajax({
//         type: "GET",
//         url: "/minuscart",
//         data: { prod_id: id },
//         success: function(data) {
//             console.log("data=", data);

//             if(data.removed) {
//                 location.reload();
//             } else if (data.quantity) {
//                 eml.innerText = data.quantity;
//                 document.getElementById("amount").innerText = data.amount;
//                 document.getElementById("totalamount").innerText = data.totalamount;
//             } else {
//                 console.log("Invalid response from server.");
//             }
//         },
//         error: function(jqXHR, textStatus, errorThrown) {
//             console.log("AJAX Error:", textStatus, errorThrown);
//         }
//     });
// });



// decreasing quatity 
// $('.input-counter__minus').click(function(){
//     var id=$(this).attr("pid").toString();
//     var eml= this.parentNode.children[1]
//     console.log('pid=',id)
//     $.ajax({
//         type:"GET",
//         url:"/minuscart",
//         data:{
//             prod_id:id
//         },
//         success:function(data){
//             console.log("data=",data);
//             eml.innerText=data.quantity
//             document.getElementById("amount").innerText=data.amount
//             document.getElementById("totalamount").innerText=data.totalamount
            
//         }
//     })
// })



// **Product variant displaying**
$('.product_variant').click(function(){
    var id=$(this).attr("pid").toString();
    
    // console.log('parentNode=',eml)
    console.log('pid=',id)
    $.ajax({
        type:"GET",
        url:"/product_variantoption_selecting",
        data:{
            variantoption_id:id
        },
        success:function(data){
            console.log("data=",data);
            // if (data.product_variant_dis_price){
            //  document.getElementById("product_variant_price").innerHTML='₹'+''+data.product_variant_dis_price
            // document.getElementById("totalamount").innerText=data.totalamount

            if (data.product_variant_dis_price) {
                var oldPrice = "₹" + data.product_variant_price;
                var newPrice = "₹" + data.product_variant_dis_price;
                var discount =" ₹" + data.product_variant_dis_amt + "";
              
                var html =  newPrice + ' <h4 style="color:black ; display:inline-block">' +'<del>' +  oldPrice + '</del></h4><h4 style="color:rgb(9, 163, 9)"> You will save' + discount + '</h4>';
                
                document.getElementById("product_variant_price").innerHTML = html;
              
            }
            else{
                document.getElementById("product_variant_price").innerHTML='₹'+''+data.product_variant_price

            }
        }
    })
})









//  filter products by price
    $(document).ready(function() {
        $('#priceFilterBtn').click(function() {
            var max_price = $('#maxPrice').val();
            var min_price = $('#rangeInput').val();
            console.log(min_price)
            console.log(max_price,'max')


            $.ajax({
                url: '/filter_products_byprice',
                type: 'GET',
                data: {
                    'min_price': min_price,
                    'max_price': max_price
                },
                dataType: 'json',
                success: function(productList) {
                    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    
    
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        // alert(product[0].book_title,'hihihi')
       
       
        
        const html = `
        <div class="row is-list-active">
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="product-m">
                                            <div class="product-m__thumb">
                                               
                            
                                                <a class="aspect aspect--bg-grey aspect--square u-d-block" href="/product_details?uid=${product.id}">
                                                    
                                                    ${product.image ?`  <img class="aspect__img"  src="/media/${product.image}" alt="dd">`:''}</a>
                                                    
                                                <div class="product-m__quick-look">
                            
                                                    <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                                                    <div class="product-m__add-cart">

                            
                                                        <a class="btn--e-brand" data-modal="modal" data-modal-id="" href="/create_cart?uid=${ product.id }&variant_option_id=${product.var_id}">Add to Cart</a></div>
                                                                                                         <!-- #add-to-cart -->
                                                    </div>
                                               
                                            <div class="product-m__content">
                                                <div class="product-m__category">
                            
                                                <a href="">${ product.p_category } | ${product.p_subcategory}</a></div>
                                                <div class="product-m__name">
                            
                                                    <a href="product-detail.html">${ product.book_title }</a></div>
                                                <div class="product-m__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>
                            
                                                    <span class="product-m__review">(23)</span></div>
                                                    ${ product.dis_price ? 
                                                        `<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div><br>
                                                        <div class="product-m__price fa fa-rupee" ><del>₹${ product.dis_price} </del>You will save ${ product.save_price}</div>`
                                                                            
                                                        :`<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div>`  
                                                                 }
                                                <div class="product-m__hover">
                                                    <div class="product-m__preview-description">
                            
                                                        <span>${product.description}</span></div>
                                                    <div class="product-m__wishlist">
                            
                                                        <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', html);
    }


                    console.log(data.varop_obj);
                    // Do something with the filtered products
                },
                error: function(xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        })
    });








// filter products by category
$('.filter_pro_bycate').click(function(){
    var id=$(this).attr("pid").toString();
    console.log(id)
    filterProducts(id)

function filterProducts(id) {
    const url = '/filter_bycategory/?cate_proname=' +id;
    console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // const productList=eval(xhr.responseText);
            const productList = JSON.parse(xhr.responseText);
            console.log(productList)
            // alert(productList[0],'hihihi')
            updateProductList(productList);
            
        }
    };
    xhr.send();
}
function updateProductList(productList) {
    const productContainer = document.getElementById('product-list');
    const input=document.getElementById("main-search")
    input.value='';
    productContainer.innerHTML = '';
    
    
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        // alert(product[0].book_title,'hihihi')
       
       
        
        const html = `
        <div class="row is-list-active">
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="product-m">
                                            <div class="product-m__thumb">
                                               
                            
                                                <a class="aspect aspect--bg-grey aspect--square u-d-block" href="/product_details?uid=${product.id}">
                                                    
                                                    ${product.image ?`  <img class="aspect__img"  src="/media/${product.image}" alt="dd">`:''}</a>
                                                    
                                                <div class="product-m__quick-look">
                            
                                                    <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                                                    <div class="product-m__add-cart">

                            
                                                        <a class="btn--e-brand" data-modal="modal" data-modal-id="" href="/create_cart?uid=${ product.id }&variant_option_id=${product.id_var}">Add to Cart</a></div>
                                                                                                         <!-- #add-to-cart -->
                                                    </div>
                                               
                                            <div class="product-m__content">
                                                <div class="product-m__category">
                            
                                                <a href="">${ product.p_category } | ${product.p_subcategory}</a></div>
                                                <div class="product-m__name">
                            
                                                    <a href="product-detail.html">${ product.book_title }</a></div>
                                                <div class="product-m__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>
                            
                                                    <span class="product-m__review">(23)</span></div>
                                                    ${ product.dis_price ? 
                                                        `<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div>
                                                        <div class="product-m__price fa fa-rupee" ><del>₹${ product.dis_price} </del>You will save ${ product.save_price}</div>`
                                                                            
                                                        :`<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div>`  
                                                                 }
                                                <div class="product-m__hover">
                                                    <div class="product-m__preview-description">
                            
                                                        <span>${product.description}</span></div>
                                                    <div class="product-m__wishlist">
                            
                                                        <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', html);
    }
}
})

    
    // console.log('parentNode=',eml)
    // console.log('pid=',id)
    // $.ajax({
    //     type:"GET",
    //     url:"/filter_bycategory",
    //     data:{
    //         cate_proid:id
        // },
        // success:function(data){
        //     console.log("data=",data);
           
        //      document.getElementById("product_variant_price").innerHTML='₹'+''+data.product_variant_price
        //     // document.getElementById("totalamount").innerText=data.totalamount
        // }
   

        
//  filter by subcategory
$('.filter_pro_bysubcate').click(function(){
    var id=$(this).attr("pidd").toString();
    console.log(id)
    filterProducts(id)

function filterProducts(id) {
    const url = '/filter_by_subcategory/?cate_proname=' +id;
    console.log(url)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // const productList=eval(xhr.responseText);
            const productList = JSON.parse(xhr.responseText);
            console.log(productList)
            // alert(productList[0],'hihihi')
            updateProductList(productList);
            
        }
    };
    xhr.send();
}
function updateProductList(productList) {
    const productContainer = document.getElementById('product-list');
    const input=document.getElementById("main-search")
    input.value='';
    productContainer.innerHTML = '';
    
    
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        // alert(product[0].book_title,'hihihi')
       
       
        
        const html = `
        <div class="row is-list-active">
                                    <div class="col-lg-4 col-md-6 col-sm-6">
                                        <div class="product-m">
                                            <div class="product-m__thumb">
                                               
                            
                                                <a class="aspect aspect--bg-grey aspect--square u-d-block" href="/product_details?uid=${product.id}">
                                                    
                                                    ${product.image ?`  <img class="aspect__img"  src="/media/${product.image}" alt="dd">`:''}</a>
                                                    
                                                <div class="product-m__quick-look">
                            
                                                    <a class="fas fa-search" data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick Look"></a></div>
                                                    <div class="product-m__add-cart">

                            
                                                        <a class="btn--e-brand" data-modal="modal" data-modal-id="" href="/create_cart?uid=${ product.id }&variant_option_id=${product.id_var}">Add to Cart</a></div>
                                                                                                         <!-- #add-to-cart -->
                                                    </div>
                                               
                                            <div class="product-m__content">
                                                <div class="product-m__category">
                            
                                                <a href="shop-side-version-2.html">${ product.p_category } | ${product.p_subcategory}</strong></a></div><strong>
                                                <div class="product-m__name">
                            
                                                    <a href="product-detail.html">${ product.book_title }</a></div>
                                                <div class="product-m__rating gl-rating-style"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i>
                            
                                                    <span class="product-m__review">(23)</span></div>
                                                    ${ product.dis_price ? 
                                                        `<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div>
                                                        <div class="product-m__price fa fa-rupee" ><del>₹${ product.dis_price} </del>You will save ${ product.save_price}</div>`
                                                                            
                                                        :`<div class="product-m__price fa fa-rupee" ><h2 style='color: orangered'>₹${ product.price}</div>`  
                                                                 }
                                                <div class="product-m__hover">
                                                    <div class="product-m__preview-description">
                            
                                                        <span>${product.description}</span></div>
                                                    <div class="product-m__wishlist">
                            
                                                        <a class="far fa-heart" href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', html);
    }
}
})





