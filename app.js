const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const bttnsin = document.querySelector('#bttn-1');
const bttnsup = document.querySelector('#bttn-2');
const mail = document.querySelector('#sin-mail');
const pass = document.querySelector('#sin-pass');
const mailsup = document.querySelector('#sup-mail');
const passup= document.querySelector('#passup');
const userName= document.querySelector('#user')

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

bttnsin.addEventListener('click',()=>{
	if(mail.value==''){
		alert("Email feild is empty")
	}
	else if (pass.value=='') {
		alert("Enter your password")
	}
})

bttnsup.addEventListener('click',()=>{
	if(userName.value==''){
		alert('Enter your userName')
	}
	else if(mailsup.value==''){
		alert('Enter Email Address')
	}
	else if(passup.value==''){
		alert('Enter your password')
	}
	else if(passup.value.length<=8){
		alert('Length of your password must be greater than 8 characters')
	}
})