


function generateGun() {
	var number = Math.round(Math.random()*2);//random # 1-3
	
	if (number == 0) {
		generatePistol();
	}
	
	if (number == 1) {
		generateAssult();
	}
	
	if (number == 2) {
		generateSniper();
	}
	
	
};

document.getElementById('GenerateButton').style.visibility = 'hidden';

		setTimeout (function (del) {
		document.getElementById('GenerateButton').style.visibility = 'visible';
		}, 5200);
		
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading." ;
								},500);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading.." ;
								},1000);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading..." ;
								},1500);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading.." ;
								},2000);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading." ;
								},2500);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading" ;
								},3000);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading." ;
								},3500);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading.." ;
								},4000);
								
								setTimeout (function (load) {
									document.getElementById('load').innerHTML = "Loading..." ;
								},4500);
								
								setTimeout (function (load) {
									document.getElementById('load').style.visibility = 'hidden';
								},4999);
		
		
						document.getElementById('firePistol').style.visibility = 'hidden';
						document.getElementById('electricPistol').style.visibility = "hidden";
						document.getElementById('waterPistol').style.visibility = "hidden";
						document.getElementById('naturePistol').style.visibility = "hidden";

			document.getElementById('fireAssult').style.visibility = "hidden";
			document.getElementById('electricAssult').style.visibility = "hidden";
			document.getElementById('waterAssult').style.visibility = "hidden";
			document.getElementById('natureAssult').style.visibility = "hidden";

						document.getElementById('fireSniper').style.visibility = "hidden";
						document.getElementById('electricSniper').style.visibility = "hidden";
						document.getElementById('waterSniper').style.visibility = "hidden";
						document.getElementById('natureSniper').style.visibility = "hidden";
						
						
						
						
						
		
		var randomElement = ["fire","electric","Water","Nature"];


					var fireName = ["Burnt","Crispy","Fried","Hot"];
					var electricName = ["Stunned","Zapped","Sparky","Electric"];
					var waterName = ["Splashy","Wet","Slippery","Flowing"];
					var natureName = ["Bright","Alive","Fresh","Elegant"];
		
		
function generatePistol() {
	var oneten = Math.round(Math.random()*5) + 5;
	var dammage = 0;
	var accuracy = 0;
	var fireRate = 0;
	var elementType = "None";
	
		dammage = Math.round(oneten * 1);
		accuracy = Math.round(oneten * 0.8);
		fireRate = Math.round(oneten * 0.7);
		clip = Math.round(Math.random()*5) + 5 ; 
		elementType = randomElement[Math.round(Math.random() * 3)];
		
		document.getElementById('dammage').innerHTML ="Dammage: " + dammage;
		document.getElementById('accuracy').innerHTML ="Accuracy: " + accuracy;
		document.getElementById('fireRate').innerHTML ="Firerate: " + fireRate;
		document.getElementById('clip').innerHTML ="Clip Size: " + clip;
		 
		
				if (elementType == "fire"){
					var selector = fireName[Math.round(Math.random()*3)];
				}
				else if (elementType == "electric") {
					var selector = electricName[Math.round(Math.random()*3)];
				}
				else if (elementType == "Water") {
					var selector = waterName[Math.round(Math.random()*3)];
				}
				else{
				var selector = natureName[Math.round(Math.random()*4)];
				}
		
												document.getElementById('firePistol').style.visibility = 'hidden';
						document.getElementById('electricPistol').style.visibility = "hidden";
						document.getElementById('waterPistol').style.visibility = "hidden";
						document.getElementById('naturePistol').style.visibility = "hidden";

			document.getElementById('fireAssult').style.visibility = "hidden";
			document.getElementById('electricAssult').style.visibility = "hidden";
			document.getElementById('waterAssult').style.visibility = "hidden";
			document.getElementById('natureAssult').style.visibility = "hidden";

						document.getElementById('fireSniper').style.visibility = "hidden";
						document.getElementById('electricSniper').style.visibility = "hidden";
						document.getElementById('waterSniper').style.visibility = "hidden";
						document.getElementById('natureSniper').style.visibility = "hidden";
					
						if (elementType == "fire"){
							document.getElementById('firePistol').style.visibility = "visible";
						}
						else if (elementType == "electric") {
							document.getElementById('electricPistol').style.visibility = "visible";
						}
						else if (elementType == "Water") {
							document.getElementById('waterPistol').style.visibility = "visible";
						}
						else{
							document.getElementById('naturePistol').style.visibility = "visible";
						}
						
						
								document.getElementById('name').innerHTML = selector + " Hand Gun";
							
};

function generateAssult() {
	var oneten = Math.round(Math.random()*5) + 5;
	var dammage = 0;
	var accuracy = 0;
	var fireRate = 0;
	var elementType = "None";
	
		dammage = Math.round(oneten * 0.5);
		accuracy = Math.round(oneten * 0.3);
		fireRate = Math.round(oneten * 1);
		clip = Math.round(Math.random()*15) + 20 ; 
		elementType = randomElement[Math.round(Math.random() * 3)];
		
		document.getElementById('dammage').innerHTML ="Dammage: " + dammage;
		document.getElementById('accuracy').innerHTML ="Accuracy: " + accuracy;
		document.getElementById('fireRate').innerHTML ="Firerate: " + fireRate;
		document.getElementById('clip').innerHTML ="Clip Size: " + clip;
		
		
		if (elementType == "fire"){
			var selector = fireName[Math.round(Math.random()*3)];
		}
		else if (elementType == "electric") {
			var selector = electricName[Math.round(Math.random()*3)];
		}
		else if (elementType == "Water") {
			var selector = waterName[Math.round(Math.random()*3)];
		}
		else{
			var selector = natureName[Math.round(Math.random()*3)];
		}
		
		document.getElementById('name').innerHTML = selector + " Assult Rifle";
		
		
											document.getElementById('firePistol').style.visibility = 'hidden';
						document.getElementById('electricPistol').style.visibility = "hidden";
						document.getElementById('waterPistol').style.visibility = "hidden";
						document.getElementById('naturePistol').style.visibility = "hidden";

			document.getElementById('fireAssult').style.visibility = "hidden";
			document.getElementById('electricAssult').style.visibility = "hidden";
			document.getElementById('waterAssult').style.visibility = "hidden";
			document.getElementById('natureAssult').style.visibility = "hidden";

						document.getElementById('fireSniper').style.visibility = "hidden";
						document.getElementById('electricSniper').style.visibility = "hidden";
						document.getElementById('waterSniper').style.visibility = "hidden";
						document.getElementById('natureSniper').style.visibility = "hidden";
		
					if (elementType == "fire"){
							document.getElementById('fireAssult').style.visibility = "visible";
						}
						else if (elementType == "electric") {
							document.getElementById('electricAssult').style.visibility = "visible";
						}
						else if (elementType == "Water") {
							document.getElementById('waterAssult').style.visibility = "visible";
						}
						else{
							document.getElementById('natureAssult').style.visibility = "visible";
						}
};

function generateSniper() {
	var oneten = Math.round(Math.random()*5) + 5;
	var dammage = 0;
	var accuracy = 0;
	var fireRate = 0;
	var elementType = "None";
	
		dammage = Math.round(oneten * 1);
		accuracy = Math.round(oneten * 0.6);
		fireRate = Math.round(oneten * 0.2);
		clip = Math.round(Math.random()*3) + 5; 
		elementType = randomElement[Math.round(Math.random() * 3)];
		
		document.getElementById('dammage').innerHTML ="Dammage: " + dammage;
		document.getElementById('accuracy').innerHTML ="Accuracy: " + accuracy;
		document.getElementById('fireRate').innerHTML ="Firerate: " + fireRate;
		document.getElementById('clip').innerHTML ="Clip Size: " + clip;
		
		
		if (elementType == "fire"){
			var selector = fireName[Math.round(Math.random()*3)];
		}
		else if (elementType == "electric") {
			var selector = electricName[Math.round(Math.random()*3)];
		}
		else if (elementType == "Water") {
			var selector = waterName[Math.round(Math.random()*3)];
		}
		else{
			var selector = natureName[Math.round(Math.random()*3)];
		}
		
		document.getElementById('name').innerHTML = selector + " Sniper Rifle";
		
													document.getElementById('firePistol').style.visibility = 'hidden';
						document.getElementById('electricPistol').style.visibility = "hidden";
						document.getElementById('waterPistol').style.visibility = "hidden";
						document.getElementById('naturePistol').style.visibility = "hidden";

			document.getElementById('fireAssult').style.visibility = "hidden";
			document.getElementById('electricAssult').style.visibility = "hidden";
			document.getElementById('waterAssult').style.visibility = "hidden";
			document.getElementById('natureAssult').style.visibility = "hidden";

						document.getElementById('fireSniper').style.visibility = "hidden";
						document.getElementById('electricSniper').style.visibility = "hidden";
						document.getElementById('waterSniper').style.visibility = "hidden";
						document.getElementById('natureSniper').style.visibility = "hidden";
		
		
					if (elementType == "fire"){
							document.getElementById('fireSniper').style.visibility = "visible";
						}
						else if (elementType == "electric") {
							document.getElementById('electricSniper').style.visibility = "visible";
						}
						else if (elementType == "Water") {
							document.getElementById('waterSniper').style.visibility = "visible";
						}
						else{
							document.getElementById('natureSniper').style.visibility = "visible";
						}
};

