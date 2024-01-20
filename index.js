const base_url= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const button = document.querySelector("form button");
const fromCurr=document.querySelector(".from select")
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")

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

button.addEventListener("click",async (event)=>{
event.preventDefault();
let amt = document.querySelector(" input")
let value=amt.value;
if(value===""){
    alert("please enter anount to be converted")
}
if(value<0){
    alert("invalid input")
}


const URL = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

let response = await fetch(URL);

let ans = await response.json();
console.log(ans)
let rate = ans[toCurr.value.toLowerCase()]
console.log(rate)

let finalAmt=value*rate;

msg.innerText=`${value} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`
})