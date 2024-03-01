let input = document.querySelector(".input");
let btm = document.querySelector(".btn");
let boxes = document.querySelector(".boxes");
let reciepe= (reciepe) => {
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${reciepe}`)
.then(resp => resp.json())
.then(data => {
   let dat= data.meals;
   let html="";
  if(dat!=null){
   console.log(dat);
    dat.forEach(element => {
        html+=`
        <div class="box"> 
        <h1>${element.strMeal}</h1> 
        <div class="img"> 
        <img src="${element.strMealThumb}" alt="" srcset="" style="height:100% ; width:100%;">
         </div>
          <div class="overbox">
           <div class="yt">
           <iframe width="280" height="200" src="${element.strYoutube}"></iframe>
           </div> 
           <h2>INGREDIENTS</h2> 
           <h3>${element.strIngredient1}</h3> 
           <h3>${element.strIngredient2}</h3> 
           <h3>${element.strIngredient3}</h3> 
           <h3>${element.strIngredient4}</h3> 
           <h3>${element.strIngredient5}</h3> 
           <h3>${element.strIngredient6}</h3> 
           <h3>${element.strIngredient7}</h3> 
           <h3>${element.strIngredient8}</h3> 
           <h3>${element.strIngredient9}</h3> 
           <h3>${element.strIngredient10}</h3> 
           <h3>${element.strInstructions}</h3> 
           </div> 
           </div>
        `
        
    });
    boxes.innerHTML=html;}
    else{
        html+=`<h1>Data Not Avaialable<h1>`
    }
   });
}
btm.addEventListener("click", ()=>{
    reciepe(input.value);
})