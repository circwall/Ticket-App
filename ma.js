const form = document.getElementById('form');
const named = form.elements['name'];
const email = form.elements['email'];
const number = form.elements['phone'];
const age = form.elements['age'];
const cadress = form.elements['adress'];
const submitt = form.elements['submit'];
const msg = document.getElementById("small");
const msgem = document.getElementById("smallem");
const msgna = document.getElementById("smallna");
const msgnum =document.getElementById("smallnum");
const msgage = document.getElementById("smallage");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regeName= /[A-Za-z]/g;
let list = document.getElementById("lists")

form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();

    formVal()
    accepted()
    console.log(data)
    buytick();
});

// to validate the inputs
let formVal =() =>{
 /* switch (email.value, age.value , cadress.value, msg, emailRegex, number.value, named.value) {
    case emailRegex.test(email.value):
        msgem.innerHTML = "input a valid email adress" 
        break;
    case typeof( age.value) !=="number":
    case age.value <18 :
    case age.value >30:
        msgnum.innerHTML = "Enter a number of age above 18 and below 30"
    default:
        break;
  }*/
};

let data=[];

let accepted=()=>{
    data.push({
        userName: named.value,
        userno: number.value,
        userEmail:email.value,
        userAge: age.value,
        adressof:cadress.value})
    
    localStorage.setItem("users", JSON.stringify(data))
    
}

let buytick = () => {
    list.innerHTML="";
    //list++
    data.map((x, y)=>{
        return (list.innerHTML += `
        <ul>
            <li>
            <div id=$(y)>
            <p id="namen">Name: ${x.userName}</p>
            <p>contact: ${x.userno}</p>
            <p>Location: ${x.adressof}</p>
        </li>
        </ul>
    </div>
        `);
    
    });

    resetForm()
}

let resetForm= () =>{
    named.value="";
    number.value= '';
    email.value= "";
    age.value ="";
    cadress.value = "";
}
(() => {
    data = JSON.parse(localStorage.getItem("users")) || [];
    console.log(data);
    buytick();
  })();

