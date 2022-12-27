
/* Nav Sticky */
		window.onscroll = function(){
		if(this.pageYOffset > 0){
			document.querySelector("nav").style.cssText=`position: sticky;top: 0;`;

		 }
		 else{
			document.querySelector("nav").style.cssText=``;
		 }
	}
/* Nav Sticky*/



/* Gallery */

	let arrImages = ["0.jpg","1.jpg","2.jpg","3.jpg"];
	let container = document.querySelector(".gallery .container");
	container.innerHTML = "";
	arrImages.forEach((a,i)=>{
		let div = document.createElement('div');
		let img = document.createElement('img');
		div.className="image";

		img.src ="images/"+ a;
		img.alt = "image"+i;

		div.appendChild(img);
		container.appendChild(div);

	}); 
	let images = Array.from(document.querySelectorAll('.gallery .container .image img '));
	images.forEach(a=>{
		a.onmouseover = ()=>{
			a.style.opacity=.3;
		}
		a.onmouseleave = ()=>{
			a.style.opacity=1;
		}

	});  
/* Gallery*/


/* Validation Form*/
	let inputs = document.querySelectorAll('form input');
		inputs.forEach(input=>{
			input.onfocus = ()=>{
				inputs.forEach(inp=>{
					inp.style.border="none";
				})
				input.style.border="3px solid green";
			}
			
		});
		
	// eye //////////////////////////
	let eyes = document.querySelectorAll(".classAye");
	eyes.forEach(eye=>{
		eye.onclick = ()=>{
			let type = eye.parentNode.querySelector('input').type;
			if(type === "text"){

				eye.className="fa-solid fa-eye classAye";
				eye.parentNode.querySelector('input').type = "password";

			}else{
				eye.className="fa-sharp fa-solid fa-eye-slash classAye";
				eye.parentNode.querySelector('input').type = "text";
			}
			
		}
	});
	// eye //////////////////////////

	// validion and send to name
	function ValidationAndRedirect(event){
		/*event.preventDefault();*/
		let fullname = document.querySelector("#fullname");
		let password = document.querySelector("#password");
		let repassword = document.querySelector("#repassword"); 
		if(fullname.value === "" ){
			
			fullname.parentNode.querySelector('p').innerHTML = "full name can not be empty ";
			setBorder(fullname,'red');


		}else if(fullname.value.length < 3){
			fullname.parentNode.querySelector('p').innerHTML = "full name can not be less than 3 character";
			setBorder(fullname,'red');

		}else {
			fullname.parentNode.querySelector('p').innerHTML = "";
			setBorder(fullname,'green');
		}
		if(password.value === ""){
			password.parentNode.querySelector('p').innerHTML = "password can not be empty ";
			setBorder(fullname,'red');	
		}else{
			password.parentNode.querySelector('p').innerHTML = "";
			setBorder(fullname,'green');
		}
		if(repassword.value === ""){
			repassword.parentNode.querySelector('p').innerHTML = "repassword can not be empty ";
			setBorder(fullname,'red');
		}else if(repassword.value !== ""){
			repassword.parentNode.querySelector('p').innerHTML = "";
			setBorder(fullname,'green');
		}
		else if(password.value !== repassword.value ){
			password.parentNode.querySelector('p').innerHTML = "not match password ";
			repassword.parentNode.querySelector('p').innerHTML = "not match password ";
			setBorder(fullname,'red');
		}else{
			password.parentNode.querySelector('p').innerHTML = "";
			repassword.parentNode.querySelector('p').innerHTML = "";
			setBorder(fullname,'green');
			location.href=`sayhello.html?${fullname.value}`
		}
	}
	function setBorder(element,color){
		element.style.border=`3px solid ${color}`;
	}
/* Validation Form*/


/* Slider */
	let slides =Array.from(document.querySelectorAll('.slider .slide'));
	let slideLength = slides.length;
	let current = 0;
	let auto   = setInterval(autoSlide,3000);

	function autoSlide(){
		if(current < slideLength - 1){
			current++;
		}else{
			current=0;
		}
		checkCurrentSlide(); 
	}



	function checkCurrentSlide(){
		slides.forEach(a=>a.classList.remove('active'));
		slides[current].classList.add('active');
	}
	function nextSlide(){
		if(current < slideLength - 1){
			current++;
		}else{
			current = 0;
		}
		console.log(current);
		checkCurrentSlide();
	}
	function preVousSlide(){
		if(current === 0){
			return;
		}else{
			current--;
		}
		checkCurrentSlide()
	}
	function stopauto(){
		clearInterval(auto);
	}
	function playauto(){
		auto   = setInterval(autoSlide,3000);
	} 
/* Slider */




/* Rate Stars */
	let rate = document.querySelectorAll('.rate i');

	rate.forEach((a,i)=>{

		a.onmouseover = ()=>{
			
			a.classList.add('active');
		}

		rate.forEach((a,i)=>{

		a.onmouseleave = ()=>{
			if(a.classList.contains('activeClick')){

			}else{
			a.classList.remove('active');
			}
		}


		});
	});
	rate.forEach(a=>{

		a.onclick = ()=>{
			a.classList.toggle("activeClick");
		}
	});

/* Rate Stars */
