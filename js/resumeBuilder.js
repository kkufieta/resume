var work = {
  "jobs": [
    {
      "employer": "Ascending Intelligence Technologies",
      "title": "Cofounder & Control Systems Engineer",
      "location": "New York City, USA",
      "dates": "October 2015 - Present",
      "description": ""
    },
    {
      "employer": "asmbld.",
      "title": "Control Systems Engineer",
      "location": "New York City, USA",
      "dates": "June 2015 - September 2015",
      "description": "Implemented of a trajectory generator, central controller and GUI with Python, Kivy & Bash, as well as embedded software control written in Squirrel."
    },
    {
      "employer": "Volkswagen AG",
      "title": "Internship - Data Analyst, Accident Research",
      "location": "Wolfsburg Area, Germany",
      "dates": "May 2014 - September 2014",
      "description": "Performed data analysis and statistical computing. Changed the requirements for the development of the newest driver assistance system by identifying parameters that play a major role in car accidents."
    }
  ]
}

var projects = {
  "project": [
    {
      "title": "Arcade Game Clone",
      "dates": "January 2016",
      "description": "To be announced.",
      "images": ["images/front_end/arcade-250-1x.jpg"]
    }, {
      "title": "Feed Reader Testing",
      "dates": "May 2016",
      "description": "To be announced.",
      "images": ["images/front_end/testing-250-1x.jpg"]
    }, {
      "title": "Health Tracker",
      "dates": "April 2016",
      "description": "To be announced.",
      "images": ["images/front_end/kermit-250-1x.jpg"]
    }, {
      "title": "Neighborhood Map",
      "dates": "March 2016",
      "description": "To be announced.",
      "images": ["images/front_end/map-250-1x.jpg"]
    }, {
      "title": "Website Optimization",
      "dates": "February 2016",
      "description": "To be announced.",
      "images": ["images/front_end/code-screen-250-1x.jpg"]
    }, {
      "title": "Portfolio",
      "dates": "November 2015",
      "description": "Designed and implemented my portfolio website.",
      "images": ["images/front_end/portfolio.jpg"]
    }, {
      "title": "Force estimation in robotic manipulators: Modeling, Simulation and Experiments",
      "dates": "January 2014",
      "description": "Derived and verified an accurate dynamic model for the UR5 manipulator through simulations and experiments with the robot and an accelerometer.",
      "images": ["images/front_end/robot.jpg"]
    }
  ]
}

var bio = {
  "name": "Katharina Kufieta",
  "role": "Software Engineer",
  "welcomeMessage": "Welcome, stranger.",
  "contacts": {
    "github": "https://github.com/KatharinaXeniaKufieta", 
    "location": "New York City"
    },
  "skills": [
    "HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "Matlab", "Simulink", "R", "C++", "Python", "Squirrel", "Kivy", "Bash", "Git", "Arduino Uno", "Electric Imp"
  ],
  "bioPic": "images/me2.jpg"
}

var education = {
  "schools": [
    {
      "name": "University of Stuttgart",
      "location": "Stuttgart, Germany",
      "degree": "Diplom Engineer (equivalent to MSc)",
      "majors": ["Control Systems Engineering"],
      "dates": 2014,
      "url": "http://www.uni-stuttgart.de/home/"
    } 
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Learning How to Learn: Powerful mental tools to help you master tough subjects",
      "school": "Coursera",
      "dates": 2015,
      "url": "https://www.coursera.org/learn/learning-how-to-learn"
    }
  ]
}

/*******************
 ** Append skills **
 *******************/
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);

formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

// var HTMLheaderName = '<h1 id="name">%data%</h1>';
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHeaderName);

if (bio.skills === undefined || bio.skills.length === 0) {
  // don't make a skills section
} else {
  // make a skills section
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}



/*******************
 ** Append skills **
 *******************/

work.display = function() {
  for (jobs in work) {
    if (work.hasOwnProperty(jobs) && work[jobs].length > 0) {
      for (var i = 0; i < work[jobs].length; i++) {
        $("#workExperience").append(HTMLworkStart);
        if (work[jobs][i].employer !== undefined && work[jobs][i].title !== undefined) {
          formattedEmployer = HTMLworkEmployer.replace("%data%", work[jobs][i].employer);
          formattedTitle = HTMLworkTitle.replace("%data%", work[jobs][i].title);
          $(".work-entry:last").append(formattedEmployer + formattedTitle);
        }
        if (work[jobs][i].dates !== undefined) {
          formattedDates = HTMLworkDates.replace("%data%", work[jobs][i].dates);
          $(".work-entry:last").append(formattedDates);
        }
        if (work[jobs][i].location !== undefined) {
          formattedLocation = HTMLworkLocation.replace("%data%", work[jobs][i].location);
          $(".work-entry:last").append(formattedLocation);
        }
        if (work[jobs][i].description !== undefined) {
          formattedDescription = HTMLworkDescription.replace("%data%", work[jobs][i].description);
          $(".work-entry:last").append(formattedDescription);
        }
      }
    }
  }
}

projects.display = function() {
  for (project in projects) {
    if (projects.hasOwnProperty(project) && projects[project].length > 0) {
      for (var i = 0; i < projects[project].length; i++) {
        $("#projects").append(HTMLprojectStart);
        formattedTitle = 
          HTMLprojectTitle.replace("%data%", projects[project][i].title);
        formattedDates = 
          HTMLprojectDates.replace("%data%", projects[project][i].dates);
        formattedDescription = 
          HTMLprojectDescription.replace("%data%",
            projects[project][i].description);
        formattedImage = 
          HTMLprojectImage.replace("%data%", projects[project][i].images);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}


var clickingLikeCrazy = function(loc) {
  console.log(loc);
  console.log(loc.pageX);
  console.log(loc.pageY);
  logClicks(loc.pageX, loc.pageY);
}

$(document).click(clickingLikeCrazy);

/*
$(document).click(function(loc) { 
  // your code goes here 
  console.log(loc);
  console.log(loc.pageX);
  console.log(loc.pageY);
  logClicks(loc.pageX, loc.pageY);
});
*/

$("#main").append(internationalizeButton);

function inName() {
  var arrayOfNames = bio.name.trim().split(" ");
  var internationalName = arrayOfNames[0].slice(0,1).toUpperCase()
    + arrayOfNames[1].slice(1).toLowerCase() + " " 
    + arrayOfNames[1].toUpperCase();

  return internationalName;
}




// Display work and projects
work.display();
projects.display();

$("#mapDiv").append(googleMap);
