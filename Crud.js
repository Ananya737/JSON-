

//Syncronous
//asyncronous

//Async - keyword 
//Await - keyword


let fetchData=async ()=>{
    let url='http://localhost:3000/car';

    let res = await fetch(url,{method:"GET"});

    console.log(res)

    let data = await res.json();

    console.log(data)

    let display=document.querySelector("#display");



    data.map((e)=>{
display.innerHTML+=`<tr>
<td>${e.name}</td>
<td>${e.car}</td>
<td>${e.number}</td>
<td>${e.hours}</td>
<td>${e.person}</td>
<td>${e.price}</td>
<td>${e.price*e.person}</td>
<td onclick="deletee('${e.id}')"> Cancel </td>
</tr>`
    })


    
}

// fetchData();

let deletee=(id)=>{

    let url=`http://localhost:3000/car/${id}`

    fetch(url,{method:"DELETE"})
    
}
//Fetch method ka by default nature hota hai data get karna.

// fetchData()

// CRUD: Create Read Update Delete.













