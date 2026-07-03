//true constants
const PRODUCTSURL = "https://www.course-api.com/javascript-store-products";

//step 3 function, Asyncronous function to fetch data from URL JSON.
const fetchProductsThen = async function(){
    //JSON data is an ARRAY, empty array to hold data.
    //fetch using PROMISE data type
    
    //using .then to control behavior depending on promised data
    const productArray = await fetch(PRODUCTSURL)
    .then((response) => {
        //response is the output of the fetch promise
        console.log("Fetch Successful");
        //.json method unwraps array
        const array = response.json();
        //array is passed to the 'await', the array value is passed to the const.
        return array;
    })
    .catch((error) =>{
        handleError(error);
    });
    console.log(productArray);
    //for-of loop to log product names
    for (product of productArray){
        //products are layer object
        console.log(product.fields.name);
    }

}

//step 4 function
async function fetchProductsAsync(){
    try {
        const productPromise = (await fetch(PRODUCTSURL)).json();
        console.log("Fetch Successful");
        const productArray = await productPromise;
        displayProducts(productArray);
    } catch (error) {
        handleError(error);
    }
};

//step 5 function
function displayProducts(products){
    //selecting the product-container element of the Document Object Model
    const proContainer = document.getElementById("product-container");
    for (let i = 0; i < 5 ; i++){
        let divCards = [];
        divCards[i] = document.createElement('div');
        divCards[i].classList.add('product-card');
        divCards[i].innerHTML = `
        <img src="${products[i].fields.image[0].url}" alt="${products[i].fields.name}" class="product-img">
        <div class="product-info">
            <h5 class="product-name">${products[i].fields.name}</h5>
            <p class="product-price">$${products[i].fields.price.toFixed(2)}</p>
        </div>
        `;
        proContainer.appendChild(divCards[i]);
    }
}
//step 6 function
function handleError(error){
    console.log(`An error occurred: ${error} \n Please check the URL or your internet connection.`);
};

//Step 7 run async functions.
fetchProductsThen();
fetchProductsAsync();