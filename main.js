let newConfirm =document.getElementById("nc");
let totalConfirm = document.getElementById("tc");
let newDeath = document.getElementById("nd");
let totalDeath = document.getElementById("td");
let newRecover = document.getElementById("nr");
let totalRecover = document.getElementById("tr");
let newConfirmCountry =document.getElementById("ncCountry");
let totalConfirmCountry = document.getElementById("tcCountry");
let newDeathCountry = document.getElementById("ndCountry");
let totalDeathCountry = document.getElementById("tdCountry");
let newRecoverCountry = document.getElementById("nrCountry");
let totalRecoverCountry = document.getElementById("trCountry");
let country = document.querySelector(".country");
let countries = document.querySelector(".countries");
let updateTime = document.getElementById("update");
class Stat {
  async getStat() {
    try {
  let result = await fetch("https://api.covid19api.com/summary");
      let data = await result.json();
      let statistics = data.Global;
      let count = data.Countries;
      

   newConfirm.textContent = statistics.NewConfirmed.toLocaleString();
  totalConfirm.textContent = statistics.TotalConfirmed.toLocaleString();
  newDeath.textContent = statistics.NewDeaths.toLocaleString();
  totalDeath.textContent = statistics.TotalDeaths.toLocaleString();
  newRecover.textContent = statistics.NewRecovered.toLocaleString();
  totalRecover.textContent = statistics.TotalRecovered.toLocaleString();
  updateTime.textContent = "Last time updated " + count[0].Date;
  
 return count;
      
    } catch (e) {
     console.log(e)
    }
  };
}

class DisplayStatistics {
  
   displayEm (place) {
  place.forEach((val,index) => {
   let places= document.createElement("option");
   places.value = index;
   places.text = val.Country;
   country.appendChild(places);
   
  })
return country;
      }
  
  
  }


document.addEventListener('DOMContentLoaded', () => {
  const stat = new Stat;
  const display = new DisplayStatistics;
  stat.getStat().then(items => {
    display.displayEm(items)
    })
  
  });
  
async function getEm() {
    var con = country.options[country.selectedIndex].value;
    let result = await fetch("https://api.covid19api.com/summary");
      let data = await result.json();
      let count = data.Countries;
      
 newConfirmCountry.textContent = count[con].NewConfirmed.toLocaleString();
  totalConfirmCountry.textContent = count[con].TotalConfirmed.toLocaleString();
  newDeathCountry.textContent = count[con].NewDeaths.toLocaleString();
  totalDeathCountry.textContent = count[con].TotalDeaths.toLocaleString();
  newRecoverCountry.textContent = count[con].NewRecovered.toLocaleString();
  totalRecoverCountry.textContent = count[con].TotalRecovered.toLocaleString();
    countries.style.display= "block";
    //get api
      }
 var button = document.getElementById("butt");
 button.addEventListener('click', function () {
   window.open("Assess.html","_self")
 });
 
 
 var panel1 = document.getElementById("sidePanel1");
 var panel2 = document.getElementById("sidePanel2");
 var panel3 = document.getElementById("sidePanel3");
 var panel4 = document.getElementById("sidePanel4");
 let opt = 1;
 panel4.addEventListener ('click', function () {
   if(opt){
   panel1.style.top = "0px";
     panel1.style.opacity = 1;
     panel2.style.top = "0px";
     panel2.style.opacity = 1;
     panel3.style.top = "0px";
     panel3.style.opacity = 1;
     opt = 0;
   }
   else {
     panel1.style.top = "285px";
     panel1.style.opacity = 0;
     panel2.style.top = "190px";
     panel2.style.opacity = 0;
     panel3.style.top = "95px";
     panel3.style.opacity = 0;
     opt = 1;}
 })
 panel2.addEventListener('click',function () {
   window.open("assess.html","_self")
 });
panel3.addEventListener('click',function () {
   window.open("What.html","_self")
 });
panel1.addEventListener('click',function () {
   window.open("https://www.google.com/search?client=ms-android-transsion-tecno-rev1&sxsrf=ALeKk0096SYjxGXFADTiLtGJ6UKrKtM2kg:1604314061025&q=covid+19+news&spell=1&sa=X&ved=2ahUKEwiwlNzN1-PsAhUFlFwKHT_QDVoQBSgAegQIEhAC&biw=360&bih=592&dpr=2","_blank")
 });
 