var name = "Aubrey Zaragoza";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer and Film-maker";
var formattedRole = HTMLheaderRole.replace("%data%", role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

var bio = {
  "name": "Aubrey Zaragoza",
  "role": "Web Developer and Film-maker",
  "contacts": {
    "mobile": "972-000-5555",
    "e-mail": "aubrey.zaragoza@example.com",
    "location": "USA"
},
  "welcome-message" : "Welcome to my resume page! Everything that you need to know about me is here.",
  "skills" : [
    "programming, diligence, film, photography, babysitting, awesomeness, communication, responsibility"
],
  "picture" : "images\fake.jpg"
}
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(bio.bioPic);


var work = {
  "jobs": [
    {
      "employer": "The Women's Chorus of Dallas",
      "title": "Helper",
      "dates": "September-December 2015",
      "description": "I worked there as desk help and a concert photographer."
    },
    {
      "employer": "RCHS Media",
      "title": "Film-maker",
      "dates": "January 2016-May 2017",
      "description": "For marketing purposes representing RCHS and the actvities hosted and presented by the students."
    }
  ]
}


var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "San Fransisco",
      "degree": "Intro to Programming Nanodegree",
      "major": ["CompSci"]
    },
    {
      "name": "Richland College",
      "location": "Richardson",
      "degree": "Associates",
      "major": ["Film", "Photography"]
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Zara Anatalia",
      "dates": "Started 2014",
      "description": "I don't have a specific genre, but I love to try anything if I choose to. I love film!!",
      "images": "b"
    },
    {
      "title": "Udacity",
      "dates": "2016",
      "description": "The courses each had a project to get done, I went and did them all.",
      "images": "c"
    }
  ]
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();


function displayEducation() {
  for (edu in education.schools) {
    $("education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    $(".education-entry:last").append(formattedName);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
    $(".education-entry:last").append(formattedMajor);
  }
}
displayEducation();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+ name[1];
}
$("#main").append(internationalizeButton);


function displayProjects() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
displayProjects();

$("#mapDiv").append(googleMap);
