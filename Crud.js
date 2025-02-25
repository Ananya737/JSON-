

//Syncronous
//asyncronous

//Async - keyword 
//Await - keyword



let fetchData=async ()=>{
    let url='http://localhost:3000/car';

    let res = await fetch(url);

    let data = await res.json();

    let display=document.querySelector("#display");

    data.map((e)=>{
display.innerHTML+=`<tr>
<td>${e.name}</td>
<td>${e.car}</td>
<td>${e.number}</td>
<td>${e.hours}</td>
</tr>`
    });


    
}
//Fetch method ka by default nature hota hai data get karna.

fetchData()

// CRUD: Create Read Update Delete.




