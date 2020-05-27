const url = "https://striveschool.herokuapp.com/api/product/";

async function getProducts()
{
    let response = await fetch(url , {
        method:"GET" ,
        headers: new Headers({
            'Content-Type':'application/json',
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        }),
    });
    return await response.json();
}


async function postProducts(productsToBeUploaded)
{
    let response = await fetch(url , {
        method:"POST",
        body: JSON.stringify(productsToBeUploaded) , 
        headers: new Headers ({
            "content-Type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        }),
       
    })
   
}