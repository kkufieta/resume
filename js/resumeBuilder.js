var work = {
  "jobs": [
    {
      "employer": "Ascending Intelligence Technologies",
      "title": "Control Systems Engineer",
      "location": "New York City, USA",
      "dates": "October 2015 - Present",
      "description": "Research motion planning control for robots."
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
    },
    {
      "employer": "SINTEF",
      "title": "Internship - Software Development",
      "location": "Trondheim Area, Norway",
      "dates": "April 2013 - August 2013",
      "description": "Modelled and implemented trajectory planning algorithms for a simulation that will be used to conduct Air Traffic Management research."
    },
    {
      "employer": "Festo",
      "title": "Internship - Control Engineering, Pneumatics",
      "location": "Stuttgart Area, Germany",
      "dates": "January 2010 - May 2010",
      "description": "Helped in the rapid development and prototyping of the Bionic Handling Assistant that won the German future price in 2010. Designed and implemented the motion and pneumatic control system for the Bionic Handling Assistant."
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
    "linkedin": "https://www.linkedin.com/in/katharinakufieta",
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
      "major": "Control Systems Engineering",
      "dates": 2014
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
    },
    {
      "title": "Control of Mobile Robots",
      "school": "Coursera",
      "dates": 2014,
      "url": "https://www.coursera.org/course/conrob"
    }
  ]
}

/****************************
 ** Append bio information **
 ****************************/
bio.display = function() {
  formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

  formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedHeaderRole);
  $("#header").prepend(formattedHeaderName);

  if (bio.contacts === undefined || bio.contacts.length === 0) {
    // don't make a contacts section
  } else {
    // make a contacts section
    if (bio.contacts.mobile !== undefined) {
      formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").append(formattedMobile);
      $("#footerContacts").append(formattedMobile);
    }
    if (bio.contacts.email !== undefined) {
      formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(formattedEmail);
      $("#footerContacts").append(formattedEmail);
    }
    if (bio.contacts.twitter !== undefined) {
      formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#topContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedTwitter);
    }
    if (bio.contacts.linkedin !== undefined) {
      formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
      $("#topContacts").append(formattedLinkedin);
      $("#footerContacts").append(formattedLinkedin);
    }
    if (bio.contacts.github !== undefined) {
      formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts").append(formattedGithub);
      $("#footerContacts").append(formattedGithub);
    }
    if (bio.contacts.blog !== undefined) {
      formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
      $("#topContacts").append(formattedBlog);
      $("#footerContacts").append(formattedBlog);
    }
    if (bio.contacts.location !== undefined) {
      formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(formattedLocation);
      $("#footerContacts").append(formattedLocation);
    }
  }
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

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
}

/*******************
 ** Append work **
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

/*********************
 ** Append projects **
 *********************/
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



/**********************
 ** Append education **
 **********************/
education.display = function() {
  if (education.hasOwnProperty("schools") && education.schools.length > 0) {
    for (var i = 0; i < education.schools.length; i++) {
      formattedSchoolName = HTMLschoolName.replace("%data%",
        education.schools[i].name);
      formattedSchoolDegree = HTMLschoolDegree.replace("%data%", 
        education.schools[i].degree);
      formattedSchoolDates = HTMLschoolDates.replace("%data%",
        education.schools[i].dates);
      formattedSchoolLocation = HTMLschoolLocation.replace("%data%", 
        education.schools[i].location);
      formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
        education.schools[i].major);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }
  if (education.hasOwnProperty("onlineCourses") && education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
      formattedTitle = HTMLonlineTitle.replace("%data%", 
        education.onlineCourses[i].title);
      formattedSchool = HTMLonlineSchool.replace("%data%",
        education.onlineCourses[i].school);
      formattedDates = HTMLonlineDates.replace("%data%",
        education.onlineCourses[i].dates);
      formattedUrl = HTMLonlineURL.replace("%data%",
        education.onlineCourses[i].url);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedUrl);
    }
  }
}

education.display();

/*
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
*/


/************************
 ** Log clicks on page **
 ************************/
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

/************************************
 ** Display bio, work and projects **
 ************************************/
work.display();
projects.display();
bio.display();

$("#mapDiv").append(googleMap);
