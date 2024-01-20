const base_url= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const button = document.querySelector("form button");

const dropdowns=document.querySelectorAll(".dropdown select");

for(let select of dropdowns){

for (code in countryList) {
  let newOption = document.createElement("option")
  newOption.innerText=code
  newOption.value = code;

if(select.name === "from" && code ==="USD"){
    newOption.selected="selected";}
    if(select.name === "to" && code ==="INR"){
    newOption.selected="selected";   
}
  select.append(newOption);
}
select.addEventListener("change",(evt)=>{
updateFlag(evt.target);
})
}


const updateFlag=(element)=>{
  let currCode =element.value;
  let countryCode = countryList[currCode];
  let newScr = `https://flagsapi.com/${countryCode}/flat/64.png`;
 const img= element.parentElement.querySelector("img");
 img.src=newScr;
}

button.addEventListener("click",(event)=>{
event.preventDefault();
let amt = document.querySelector(" input")
let value=amt.value;
if(value===""){
    alert("please enter anount to be converted")
}
if(value<0){
    alert("invalid input")
}
})