const url = "https://striveschool.herokuapp.com/api/product/";

async function getProducts()
{
    let response = await fetch(url, {
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
    try{
    let response = await fetch(url , {
        method:"POST",
        body: JSON.stringify(productsToBeUploaded), 
        headers: new Headers ({
            "content-Type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        }),
       
    })
    return response;
} catch(err)
{
    alert("err")
}  
}

async function handleDeleteProduct(id)
{
    try{
    let response = await fetch(url + id,{
        method:"DELETE",
        headers: new Headers ({
            "content-Type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        }),
    })
    return response;
    } catch(err)
    {
        alert("err")
    }
}

async function handleEditProduct(id , productsToBeUploaded)
{
    try{
        let response = await fetch(url + id , {
            method:"PUT",
            body: JSON.stringify(productsToBeUploaded) , 
            headers: new Headers ({
                "content-Type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }),
           
        })
        return response;
    } catch(err)
    {
        alert("err")
    }
      
}