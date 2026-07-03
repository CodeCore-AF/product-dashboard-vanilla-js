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
        console.log("Fetch Error: " + error);
        return [];
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
        const productArray = (await fetch(PRODUCTSURL)).json();
        console.log("Fetch Successful");
    } catch (error) {
        handleError(error);
    }
    displayProducts(productArray);
};

//step

//run async functions
fetchProductsThen();
fetchProductsAsync();