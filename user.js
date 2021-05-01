const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	
});

//Log In Validation
const SignUp =()=>{
	var Email = document.getElementById('email');
	var Password = document.getElementById('password');
	var Note = document.getElementById('Note')
	var cPassword =document.getElementById("Cpassword")
	var regx=/^([a-zA-z0-9\.-])+@([a-zA-z0-9\-])+.([a-z]{2,8})(.[a-z]{2,8})$/;
	if(regx.test(Email.value)){
		Email.style.border="1px solid green"
		regx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
	
		if(regx.test(Password.value)){
			Password.style.border="1px solid green"
			if(cPassword.value===Password.value){
		
				cPassword.style.border="1px solid green"
				alert('Your Account Is Created Successfully!')
				localStorage.setItem('isLogged','true')
				
			}
			else{
				cPassword.style.border="1px solid red"
				Note.style.display="block"
				Note.innerHTML="Note:Password dosent match"
				
			}  
			
		}
		else{
			Password.style.border="1px solid red"
			Note.style.display="block"
			Note.innerHTML="Note:Password should be mixture of Caps,small,special symbols and numbers"
		}
	}
	else{
		
		Email.style.border="1px solid red"
	}
	
	
	
}
const SignIn = ()=>{
	if(document.getElementById("LogEmail").value==""){
		alert('Email Cannot be Empty!')
	}
	else{
		if(document.getElementById('LogPass').value==""){
			alert("Password Cannot be Empty!")
		}
		else{
			alert("Welcome User!")
			localStorage.setItem('isLogged','true')
		}
	}
}
