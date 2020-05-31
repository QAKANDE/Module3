let url = "https://striveschool.herokuapp.com/api/movies/"


async function handlePostMovie(movieTobePosted)
{
    try{
        let response = await fetch(url , {
            method:"POST",
            body: JSON.stringify(movieTobePosted) , 
            headers: new Headers ({
                "content-Type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }),
           
        })
        return response;
} 
catch(err)
{
    alert("err")
}
   
}

async function handleGetComedyMovie()
{
    let response = await fetch("https://striveschool.herokuapp.com/api/movies/Comedy" , {
        method:"GET",
        headers:new Headers({
            "content-type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        })
    })
    return await response.json() ;
}
async function handleGetDramaMovie()
{
    let response = await fetch("https://striveschool.herokuapp.com/api/movies/Household" , {
        method:"GET",
        headers:new Headers({
            "content-type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        })
    })
    return await response.json() ;
}
async function handleGetMovie()
{
    let response = await fetch("https://striveschool.herokuapp.com/api/movies/Action" , {
        method:"GET",
        headers:new Headers({
            "content-type":"application/json",
            "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
        })
    })
    return await response.json() ;
}

async function handleDeleteMovie(id)
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

async function handleEditMovie(id , movieTobePosted)
{
    try{
        let response = await fetch(url + id , {
            method:"PUT",
            body: JSON.stringify(movieTobePosted) , 
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