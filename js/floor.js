$(function(){
	
	let userExp = localStorage.getItem("Exp");

	let maxBossHp = localStorage.getItem("ZerobossHp");
	let bossAttack = 35;
	let currentFloor = localStorage.getItem("Floor");

	//console.log(userHp + " - " + userMana + " - " + userExp + " - " + currentFloor);
	let currentBossName = localStorage.getItem("ZerobossName");
	let currentBossHp = localStorage.getItem("ZerobossHp");
	//console.log(currentBossHp + "-" + currentBossName)

	//update boss name and 
	document.getElementById("bossNameShow").innerHTML = currentBossName;




	//handle level
	if (userExp >= 0 && userExp <= 100){
		localStorage.setItem("Level", 1);
	}else if (userExp >= 101 && userExp <= 200){
		localStorage.setItem("Level", 2);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelTwoSKillPoint = localStorage.getItem("LevelTwoSkillPoint");
		if (levelTwoSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelTwoSkillPoint", "True");
		}

	}else if (userExp >= 201 && userExp <= 600){
		localStorage.setItem("Level", 3);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelThreeSKillPoint = localStorage.getItem("LevelThreeSkillPoint");
		if (levelThreeSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelThreeSkillPoint", "True");
		}

	}else if (userExp >= 301 && userExp <= 1200){
		localStorage.setItem("Level", 4);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelFourSKillPoint = localStorage.getItem("LevelFourSkillPoint");
		if (levelFourSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelFourSkillPoint", "True");
		}
	}else if (userExp >= 1201 && userExp <= 2400){
		localStorage.setItem("Level", 5);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelFiveSKillPoint = localStorage.getItem("LevelFiveSkillPoint");
		if (levelFiveSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelFiveSkillPoint", "True");
		}
	}else if (userExp >= 2401 && userExp <= 4800){
		localStorage.setItem("Level", 6);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelSixSKillPoint = localStorage.getItem("LevelSixSkillPoint");
		if (levelSixSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelSixSkillPoint", "True");
		}
	}else if (userExp >= 4801 && userExp <= 9600){
		localStorage.setItem("Level", 7);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelSevenSKillPoint = localStorage.getItem("LevelSevenSkillPoint");
		if (levelSevenSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelSevenSkillPoint", "True");
		}
	}else if (userExp >= 9601 && userExp <= 19200){
		localStorage.setItem("Level", 8);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelEightSKillPoint = localStorage.getItem("LevelEightSkillPoint");
		if (levelEightSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelEightSkillPoint", "True");
		}
	}else if (userExp >= 19201 && userExp <= 38400){
		localStorage.setItem("Level", 9);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelNineSKillPoint = localStorage.getItem("LevelNineSkillPoint");
		if (levelNineSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelNineSkillPoint", "True");
		}
	}else if (userExp >= 38401 && userExp <= 76800){
		localStorage.setItem("Level", 10);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelTenSKillPoint = localStorage.getItem("LevelTenSkillPoint");
		if (levelTenSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelTenSkillPoint", "True");
		}
	}else {
		localStorage.setItem("Level", 11);
		let userPoint = localStorage.getItem('SkillPoint');
		let levelElevenSKillPoint = localStorage.getItem("LevelElevenSkillPoint");
		if (levelElevenSKillPoint =="False"){
			userPoint = parseInt(userPoint ) + 10;
			localStorage.setItem("SkillPoint", userPoint);
			localStorage.setItem("LevelElevenSkillPoint", "True");
		}
	}

	//load name and level
	let myLevel = localStorage.getItem("Level");
	let myName = localStorage.getItem("Name");

	document.getElementById("myName").innerHTML = myName;
	document.getElementById("myLevel").innerHTML = "Level "+myLevel;

	//load information to the char box
	let userStr = localStorage.getItem("STR");
	let userVit = localStorage.getItem("VIT");
	let userInt = localStorage.getItem("INT");
	let userAgi = localStorage.getItem("AGI");
	let userObs = localStorage.getItem("OBS");

	let userStrAtt = parseInt(userStr) * 10;
	document.getElementById("userAttack").innerHTML = "AD: "+userStrAtt;
	localStorage.setItem("Attack", userStrAtt);

	let userVitHp = parseInt(userVit) * 50;
	document.getElementById("userHealthAmount").innerHTML = "HP: "+userVitHp;
	localStorage.setItem("Hp", userVitHp);

	let userIntMp = parseInt(userInt) * 15;
	document.getElementById("userManaAmount").innerHTML = "MP: "+userIntMp;
	localStorage.setItem("Mana", userIntMp);

	let userAgiCr = parseInt(userAgi)  * 0.003 * 100;
	document.getElementById("userCritical").innerHTML = "CR: "+userAgiCr + "%";
	localStorage.setItem("Critical", userAgiCr);

	let userObsDr = parseInt(userObs) * 0.02 * 100;
	document.getElementById("userDodge").innerHTML = "DR: "+userObsDr;
	localStorage.setItem("Dodge", userObsDr);

	let userSkillPoint = localStorage.getItem("SkillPoint");
	document.getElementById("currentSkillPoint").innerHTML = "Skill Point: "+userSkillPoint;

	document.getElementById("levelUpStr").innerHTML = "STR: " + userStr;
	document.getElementById("levelUpInt").innerHTML = "INT: " + userInt;
	document.getElementById("levelUpVit").innerHTML = "VIT: " + userVit;
	document.getElementById("levelUpAgi").innerHTML = "AGI: " + userAgi;
	document.getElementById("levelUpObs").innerHTML = "OBS: " + userObs;



	//user attack
	let userAttack = localStorage.getItem("Attack");
	//console.log(userAttack);
	//user hp and mp

	let userMaxHp = localStorage.getItem("Hp");
	let userHp = localStorage.getItem("Hp");
	let userMana = localStorage.getItem("Mana");
	let userMaxMana = localStorage.getItem("Mana");

	//give mana to user every 2 second if the mana is not full
	window.setInterval(function(){
		if (userMana < userMaxMana){
			userMana = userMana + 30;

			let currentMana = (userMana / userMaxMana) * 100;
			$("#userCurrentMana").css("width", currentMana+"%");
			}
	}, 2000);
	
	window.setInterval(function(){
		 if (userHp <= 0){
			userHp = userHp + 0;

			let userHpPercent = (userHp / userMaxHp) * 100 ;
			$("#userCurrentHp").css("width", userHpPercent+"%");
		}else if(userHp < userMaxHp){
			userHp = userHp + 35;

			let userHpPercent = (userHp / userMaxHp) * 100 ;
			$("#userCurrentHp").css("width", userHpPercent+"%");
		}
	}, 3000);


	$("#bossPic").on('click', function(){
		let manaUse = 30;
		let defNum = localStorage.getItem("Dodge");
		let userCrit = localStorage.getItem('Critical');
		let userRandomNum = Math.floor(Math.random() * 100);
		let randomNum = Math.floor(Math.random() * 100);
		//console.log("user: " + userRandomNum);
		//console.log("boss: " + randomNum);
		if (userHp > 0 ){
			console.log("current bossHP: " + currentBossHp);
			if (userMana < manaUse){
				//userAttack = 0;
				//bossAttack
				//currentBossHp = currentBossHp - userAttack; 	
			}else {
				if (userRandomNum > randomNum){
					currentBossHp = currentBossHp - (parseInt(userAttack) + (parseInt(userAttack) * parseInt(userCrit)/100));
					userHp = userHp - (bossAttack - (bossAttack*(parseInt(defNum)/100)));
					userMana = userMana - manaUse; 
					//console.log("current BossHP: " + currentBossHp);
				}else {
					currentBossHp = currentBossHp - userAttack;
					userHp = userHp - (bossAttack - (bossAttack*(parseInt(defNum)/100)));
					userMana = userMana - manaUse; 
					//console.log("current BossHP: " + currentBossHp);
				}
			}

		}else {
			$("#defeat").css("display", "block");
			$("#f5Mess").css("display", "block");
		}
		

		let currentPercent = (currentBossHp / maxBossHp) * 100;
		let userHpPercent = (userHp / userMaxHp) * 100 ;
		let currentMana = (userMana / userMaxMana) * 100;

		$("#userCurrentMana").css("width", currentMana+"%");
		$("#bossCurrentHp").css("width", currentPercent+"%");
		$("#userCurrentHp").css("width", userHpPercent+"%");
		if (currentBossHp <= 0) {

			$("#bossPic").css("display", "none");
			document.getElementById("victoryMess").innerHTML = currentBossName + " is Dead!";
			$("#conMess").css("display", "block");
			$("#victoryMess").css("display", "block");
			$("#confirm").css("display", "block");
		}

		$("#confirm").on('click', function(){
			//console.log("dog");
			let newExp = parseInt(userExp) + 30;
			localStorage.setItem("Exp", newExp);
			$("#exp").css("display", "block");
			$("#f5Mess").css("display", "block");
			$("#nfMess").css("display", "block");
			$("#nextFloor").css("display", "block");

			$("#nextFloor").on("click", function(){
				window.location.replace("floorOne.html");
			});
		});

	});

	$("#StrUp").on("click", function(){
		let charStr = localStorage.getItem("STR");
		let totalStr = 0;
		let strCheckSP = localStorage.getItem("SkillPoint");
		if (strCheckSP > 0){
			totalStr = parseInt(charStr) + 1;
			localStorage.setItem("STR", totalStr);
			strCheckSP = parseInt(strCheckSP) - 1;
			localStorage.setItem("SkillPoint", strCheckSP);
		}
		let updateStr = localStorage.getItem("STR");
		let updateSP  = localStorage.getItem("SkillPoint");
		document.getElementById("levelUpStr").innerHTML = "STR: "+updateStr;
		document.getElementById("currentSkillPoint").innerHTML = "Skill Point: " + updateSP;
	});

	$("#IntUp").on("click", function(){
		let charInt = localStorage.getItem("INT");
		let totalInt = 0;
		let intCheckSP = localStorage.getItem("SkillPoint");
		if (intCheckSP > 0){
			totalInt = parseInt(charInt) + 1;
			localStorage.setItem("INT", totalInt);
			intCheckSP = parseInt(intCheckSP) - 1;
			localStorage.setItem("SkillPoint", intCheckSP);
		}
		let updateInt = localStorage.getItem("INT");
		let updateSP = localStorage.getItem("SkillPoint");
		document.getElementById("levelUpInt").innerHTML = "INT: "+updateInt;
		document.getElementById("currentSkillPoint").innerHTML = "Skill Point: " + updateSP;
	});

	$("#VitUp").on("click", function(){
		let charVit = localStorage.getItem("VIT");
		let totalVit = 0;
		let vitCheckSP = localStorage.getItem("SkillPoint");
		if (vitCheckSP > 0) {
			totalVit = parseInt(charVit) + 1;
			localStorage.setItem("VIT", totalVit);
			vitCheckSP = parseInt(vitCheckSP) - 1;
			localStorage.setItem("SkillPoint", vitCheckSP);
		}
		let updateVit = localStorage.getItem("VIT");
		let updateSP = localStorage.getItem("SkillPoint");
		document.getElementById("levelUpVit").innerHTML = "VIT: " + updateVit;
		document.getElementById("currentSkillPoint").innerHTML = "SKill Point: " + updateSP;
	})

	$("#AgiUp").on("click", function(){
		let charAgi = localStorage.getItem("AGI");
		let totalAgi = 0;
		let agiCheckSP = localStorage.getItem("SkillPoint");
		if (agiCheckSP > 0) {
			totalAgi = parseInt(charAgi) + 1;
			localStorage.setItem("AGI", totalAgi);
			agiCheckSP = parseInt(agiCheckSP) - 1;
			localStorage.setItem("SkillPoint", agiCheckSP);
		}
		let updateAgi = localStorage.getItem("AGI");
		let updateSP = localStorage.getItem("SkillPoint");
		document.getElementById("levelUpAgi").innerHTML = "AGI: " + updateAgi;
		document.getElementById("currentSkillPoint").innerHTML = "Skill Point: " + updateSP;
	});

	$("#ObsUp").on("click", function(){
		let charObs = localStorage.getItem("OBS");
		let totalObs = 0;
		let obsCheckSP = localStorage.getItem("SkillPoint");
		if (obsCheckSP > 0) {
			totalObs = parseInt(charObs) + 1;
			localStorage.setItem("OBS", totalObs);
			obsCheckSP = parseInt(obsCheckSP) - 1;
			localStorage.setItem("SkillPoint", obsCheckSP);
		}
		let updateObs = localStorage.getItem("OBS");
		let updateSP = localStorage.getItem("SkillPoint");
		document.getElementById("levelUpObs").innerHTML = "OBS: "+ updateObs;
		document.getElementById("currentSkillPoint").innerHTML = "Skill Point: "+ updateSP;
	});

	$("#character").on("click", function(){
		$("#characterStats").css("display", "block");
		$("#character").css("display", "none");
		$("#characterClose").css("display", "block");	
	});
	$("#characterClose").on("click", function(){
		$("#characterStats").css("display", "none");
		$("#character").css("display", "block");
		$("#characterClose").css("display", "none");
	});

	$("#previousFloor").on('click', function(){
		window.location.replace("home.html");
	});




});