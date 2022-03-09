
let arabic=document.getElementById("arabic");
let english=document.getElementById("english");
let welcoming=document.getElementById("welcoming");
let body=document.getElementById("bdd");
let selecteion1=document.getElementById("selector");
let Home=document.getElementById("Home");
let News=document.getElementById("News");
let Contact=document.getElementById("Contact");
let About=document.getElementById("About");
let EldenRing=document.getElementById("EldenRing");
let DarkSoul=document.getElementById("Darksoul");
let vid1 = document.getElementById("vid1");
let vid2 = document.getElementById("vid2");
let vid3 = document.getElementById("vid3");
let vid4 = document.getElementById("vid4");
let vid5 = document.getElementById("vid5");
let vid6 = document.getElementById("vid6");

let count=3;


vid1.onplay = function() {
  
  if(count<=0)
  {alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
  window.location.href = "Signin.html";}
else {
  count--;
  alert(count+" Videos left To watch");
}};
vid2.onplay = function() {
  
  if(count<=0)
  {vid2.pause();
    alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
    window.location.href = "Signin.html";
  }
else {
  count--;
  alert(count+" Videos left To watch");
}};
vid3.onplay = function() {
  
  if(count<=0)
  {alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
  window.location.href = "Signin.html";}
else {
  count--;
  alert(count+" Videos left To watch");
}};
vid4.onplay = function() {
  
  if(count<=0)
  {alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
  window.location.href = "Signin.html";}
  else{
  count--;
  alert(count+" Videos left To watch");
}};
vid5.onplay = function() {
  
  if(count<=0)
  {alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
  window.location.href = "Signin.html";}
else {
  count--;
  alert(count+" Videos left To watch");
}};
vid6.onplay = function() {
  
  if(count<=0)
  {alert("You have already used your 3 limit vidoes pls sign in to enjoy a full use");
  window.location.href = "Signin.html";}
else {
  count--;
  alert(count+" Videos left To watch");
}
};
function navfunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function LangSelector(){
      if(selecteion1.options[selecteion1.selectedIndex].value=="English"){
        setLanguage("english");
        localStorage.setItem("Lang","english");
        body.dir="ltr"
      }
      else if(selecteion1.options[selecteion1.selectedIndex].value=="العربية"){
        setLanguage("arabic");
        localStorage.setItem("Lang","arabic");
        body.dir="rtl"
  }
}



onload = () =>{
    setLanguage("english");
}
function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        welcoming.innerHTML="اهلا بك في صفحتنا" ;
        Home.innerHTML="الصفحة الرئيسية";
        News.innerHTML="النشرة";
        Contact.innerHTML="تواصل معنا";
        About.innerHTML="شركتنا"
        EldenRing.innerHTML="Gameplay للعبة Elden Ring";
       DarkSoul.innerHTML="فيديو للعبة dark souls III";

       
    }
    else if(getLanguage ==="english"){

            welcoming.innerHTML="Welcome to our page" ;
            Home.innerHTML="Home";
            News.innerHTML="News";
            Contact.innerHTML="Contact us";
            About.innerHTML="About us";
           EldenRing.innerHTML="Gameplay for Elden Ring game";
            DarkSoul.innerHTML="dark souls III Ring Gameplay";
            

    }
    
}





