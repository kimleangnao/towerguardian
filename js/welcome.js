$(function(){
	var xhr = new XMLHttpRequest();

	xhr.onload = function(){
		responseAll = JSON.parse(xhr.responseText);
		for (var i = 0; i < responseAll.bossInfo.length;i++){
			console.log(i)
			localStorage.setItem(responseAll.bossInfo[i].floor+"bossName", responseAll.bossInfo[i].bossName);
			localStorage.setItem(responseAll.bossInfo[i].floor+"bossHp", responseAll.bossInfo[i].bossHp);
			localStorage.setItem(responseAll.bossInfo[i].floor+"bossDef", responseAll.bossInfo[i].bossDef);
		}	
	}
	xhr.open('GET', 'data/boss.json', true);
	xhr.send(null);





	$("#male").on("click", function(){
		localStorage.setItem("Gender", "Male");
	});
	$("#female").on("click", function(){
		localStorage.setItem("Gender", "Female");
	});

	$("#enterWorld").on('click', function(){
		let userName = $("#name").val();
		localStorage.setItem("Name", userName);
		localStorage.setItem("Level", 0);
		localStorage.setItem("Exp", 0);
		localStorage.setItem("Hp", 0);
		localStorage.setItem("Mana", 0);
		localStorage.setItem("Attack", 0);


		localStorage.setItem("SkillPoint", 0);

		localStorage.setItem("STR", 10);
		localStorage.setItem("INT", 10);
		localStorage.setItem("VIT", 10);
		localStorage.setItem("AGI", 10);
		localStorage.setItem("OBS", 10);

		localStorage.setItem("Critical", 0);
		localStorage.setItem("Dodge", 0);


		localStorage.setItem("LevelTwoSkillPoint", "False");
		localStorage.setItem("LevelThreeSkillPoint", "False");
		localStorage.setItem("LevelFourSkillPoint", "False");
		localStorage.setItem("LevelFiveSkillPoint", "False");
		localStorage.setItem("LevelSixSkillPoint", "False");
		localStorage.setItem("LevelSevenSkillPoint", "False");
		localStorage.setItem("LevelEightSkillPoint", "False");
		localStorage.setItem("LevelNineSkillPoint", "False");
		localStorage.setItem("LevelTenSkillPoint", "False");
		localStorage.setItem("LevelElevenSkillPoint", "False");


		window.location.replace("home.html");
	});



});