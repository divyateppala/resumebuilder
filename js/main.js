(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    /*creatingSummary(data.basics.summary);*/
    creatingSummary(data.basics.objective);
    /*strengths(data.strengths);*/
    creatingdeclaration(data.basics.declaration);
    for(i in data.basics.strengths ){
    creatingstrengths(data.basics.strengths[i]);
     }
     for(i in data.basics.activities ){
    creatingactivities(data.basics.activities[i]);
    }
    for(i in data.basics.details ){
    creatingdetails(data.basics.details[i]);
    }
    for(i in data.basics.achievements){
    creatingachievements(data.basics.achievements[i]);
    }
     

     for(i in data.basics.interests ){
    creatinginterests(data.basics.interests[i]);
    }
     
    
    creatingimg(data.basics.picture);
     
     for(i in data.basics.education ){
    creatingqualification(data.basics.education[i]);
     }
  });

  var resumeDiv = document.getElementById("resume");

  function creatingSummary(summary){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = summary;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    resumeDiv.appendChild(section);
  }
   var qualDiv = document.getElementById("qual");

  function creatingqualification(qual){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = qual;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    qualDiv.appendChild(section);
  }
  var strengthsDiv = document.getElementById("strengths");

  function creatingstrengths(strengths){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = strengths;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    strengthsDiv.appendChild(section);
  }
  var activitiesDiv = document.getElementById("activities");

  function creatingactivities(activities){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = activities;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    activitiesDiv.appendChild(section);
  }
  var detailsDiv = document.getElementById("details");

  function creatingdetails(details){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = details;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    detailsDiv.appendChild(section);
  }
  var achievementsDiv = document.getElementById("achievements");

  function creatingachievements(achievements){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = achievements;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    achievementsDiv.appendChild(section);
  }
  var declarationDiv = document.getElementById("declaration");

  function creatingdeclaration(declaration){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = declaration;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    declarationDiv.appendChild(section);
  }

  var interestsDiv = document.getElementById("interests");

  function creatinginterests(interests){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = interests;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    interestsDiv.appendChild(section);
  }
/*function strengths(str){
  var m;
  //console.log(str.length);
  for(m in str){
    document.write(str[m].key1);
  }
}*/
var imgDiv = document.getElementById("img");

  function creatingimg(img){
    var section = document.createElement("section");
    section.classList.add("section", "main-summary");
    var summary_section = document.createElement("section")
    var div = document.createElement("div");
    div.innerHTML = activities;
    summary_section.appendChild(div);
    section.appendChild(summary_section);
    imgDiv.appendChild(section);
  }

})();
