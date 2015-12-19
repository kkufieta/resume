/***********
 ** Work  **
 ***********/
var work = {
  'jobs': [
    {
      'employer': 'Ascending Intelligence Technologies',
      'title': 'Control Systems Engineer',
      'location': 'New York City, USA',
      'dates': 'October 2015 - Present',
      'description': 'Research motion planning control for robots.',
      'url': ''
    },
    {
      'employer': 'asmbld.',
      'title': 'Control Systems Engineer',
      'location': 'New York City, USA',
      'dates': 'June 2015 - September 2015',
      'description': 'Implemented of a trajectory generator, central controller and GUI with Python, Kivy & Bash, as well as embedded software control written in Squirrel.',
      'url': 'http://asmbld.com/dom-indoors'
    },
    {
      'employer': 'Volkswagen AG',
      'title': 'Internship - Data Analyst, Accident Research',
      'location': 'Wolfsburg Area, Germany',
      'dates': 'May 2014 - September 2014',
      'description': 'Performed data analysis and statistical computing. Changed the requirements for the development of the newest driver assistance system by identifying parameters that play a major role in car accidents.',
      'url': 'http://www.volkswagenag.com/content/vwcorp/info_center/en/themes/2008/10/volkswagen_accident_research.html'
    },
    {
      'employer': 'SINTEF',
      'title': 'Internship - Software Development',
      'location': 'Trondheim Area, Norway',
      'dates': 'April 2013 - August 2013',
      'description': 'Modelled and implemented trajectory planning algorithms for a simulation that will be used to conduct Air Traffic Management research.',
      'url': 'http://www.sintef.no/en/information-and-communication-technology-ict/departments/applied-cybernetics/'
    },
    {
      'employer': 'Festo',
      'title': 'Internship - Control Engineering, Pneumatics',
      'location': 'Stuttgart Area, Germany',
      'dates': 'January 2010 - May 2010',
      'description': 'Helped in the rapid development and prototyping of the Bionic Handling Assistant that won the German future price in 2010. Designed and implemented the motion and pneumatic control system for the Bionic Handling Assistant.',
      'url': 'https://www.festo.com/net/supportportal/files/42050/brosch_fc_bha_3_0_en_lo.pdf'
    }
  ]
};

/*******************
 ** Work Display  **
 *******************/
work.display = function() {
  for (var jobs in work) {
    if (work.hasOwnProperty(jobs) && work[jobs].length > 0) {
      for (var i = 0; i < work[jobs].length; i++) {
        $('#workExperience').append(HTMLworkStart);
        if (work[jobs][i].employer !== undefined && work[jobs][i].title !== undefined &&
             work[jobs][i].employer !== '' && work[jobs][i].title !== '') {
            if (work[jobs][i].url !== undefined && work[jobs][i].url !== '') {
              formattedEmployer = HTMLworkEmployer.replace('%data%', work[jobs][i].employer);
              formattedEmployer = formattedEmployer.replace('#', work[jobs][i].url);
              formattedTitleUrl = attachUrlIcon(work[jobs][i].title,
                work[jobs][i].url);
              formattedTitle = HTMLworkTitle.replace('%data%',
                formattedTitleUrl);
            } else {
              formattedEmployer = HTMLworkEmployer.replace('%data%', work[jobs][i].employer);
              formattedEmployer = formattedEmployer.replace('<a', '<p');
              formattedTitle = HTMLworkTitle.replace('%data%', work[jobs][i].title);
              formattedTitle = formattedTitle.replace('</a>', '</p>');
            }
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
        }

        if (work[jobs][i].dates !== undefined && work[jobs][i].dates !== '') {
          formattedDates = HTMLworkDates.replace('%data%', work[jobs][i].dates);
          $('.work-entry:last').append(formattedDates);
        }
        if (work[jobs][i].location !== undefined && work[jobs][i].location !== '') {
          formattedLocation = HTMLworkLocation.replace('%data%', work[jobs][i].location);
          $('.work-entry:last').append(formattedLocation);
        }
        if (work[jobs][i].description !== undefined && work[jobs][i].description !== '') {
          formattedDescription = HTMLworkDescription.replace('%data%', work[jobs][i].description);
          $('.work-entry:last').append(formattedDescription);
        }
      }
    }
  }
};

/**************
 ** Projects **
 **************/
var projects = {
  'projects': [
    {
      'title': 'Arcade Game Clone',
      'dates': 'January 2016',
      'description': 'To be announced.',
      'images': ['images/front_end/arcade-250-1x.jpg'],
      'url': '',
      'youtube': '7Q9ljEXsW7w'
    }, {
      'title': 'Feed Reader Testing',
      'dates': 'May 2016',
      'description': 'To be announced.',
      'images': ['images/front_end/testing-250-1x.jpg'],
      'url': ''
    }, {
      'title': 'Health Tracker',
      'dates': 'April 2016',
      'description': 'To be announced.',
      'images': ['images/front_end/kermit-250-1x.jpg'],
      'url': ''
    }, {
      'title': 'Neighborhood Map',
      'dates': 'March 2016',
      'description': 'To be announced.',
      'images': ['images/front_end/map-250-1x.jpg'],
      'url': ''
    }, {
      'title': 'Website Optimization',
      'dates': 'February 2016',
      'description': 'To be announced.',
      'images': ['images/front_end/code-screen-250-1x.jpg'],
      'url': ''
    }, {
      'title': 'Portfolio',
      'dates': 'November 2015',
      'description': 'Designed and implemented my portfolio website.',
      'images': ['images/front_end/portfolio.jpg'],
      'url': 'http://katharinaxeniakufieta.github.io/Portfolio/'
    }, {
      'title': 'Force estimation in robotic manipulators: Modeling, Simulation and Experiments',
      'dates': 'January 2014',
      'description': 'Derived and verified an accurate dynamic model for the UR5 manipulator through simulations and experiments with the robot and an accelerometer.',
      'images': ['images/front_end/robot.jpg'],
      'url': 'http://folk.ntnu.no/tomgra/Diplomer/Kufieta.pdf',
      'youtube': 'EeSUPTAz2MM'
    }
  ]
};

/**********************
 ** Projects Display **
 **********************/
projects.display = function() {
  for (var project in projects) {
    if (projects.hasOwnProperty(project) && projects[project].length > 0) {
      for (var i = 0; i < projects[project].length; i++) {
        $('#projects').append(HTMLprojectStart);

        if (projects[project][i].url !== undefined && projects[project][i].url !== '') {
          formattedTitleUrl = attachUrlIcon(projects[project][i].title,
            projects[project][i].url);
          formattedTitle =
            HTMLprojectTitle.replace('%data%', formattedTitleUrl);
          formattedTitle = formattedTitle.replace('#', projects[project][i].url);
        } else {
          formattedTitle =
            HTMLprojectTitle.replace('%data%', projects[project][i].title);
          formattedTitle = formattedTitle.replace('<a', '<p');
          formattedTitle = formattedTitle.replace('</a>', '</p>');
        }

        formattedDates =
          HTMLprojectDates.replace('%data%', projects[project][i].dates);
        formattedDescription =
          HTMLprojectDescription.replace('%data%',
            projects[project][i].description);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        for (var j = 0; j < projects[project][i].images.length; j++) {
          formattedImage =
            HTMLprojectImage.replace('%data%', projects[project][i].images[j]);
          $('.project-entry:last').append(formattedImage);
        }
        if (projects[project][i].youtube !== undefined && projects[project][i].youtube !== '') {
          formattedYoutube = HTMLprojectYoutube.replace('%data%', projects[project][i].youtube);
          $('.project-entry:last').append(formattedYoutube);
        }
      }
    }
  }
};

/*********
 ** Bio **
 ********/
var bio = {
  'name': 'Katharina Kufieta',
  'role': 'Software Engineer',
  'contacts': {
    'mobile': '999-999-9999',
    'email': 'notarealemail@gmail.com',
    'github': 'https://github.com/KatharinaXeniaKufieta',
    'twitter': 'https://twitter.com/kathikufieta',
    'location': 'New York City',
    'linkedin': 'https://www.linkedin.com/in/katharinakufieta',
    'blog': ''
    },
  'welcomeMessage': 'When in doubt, break boundaries.',
  'skills': [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'Matlab', 'Simulink', 'R', 'C++', 'Python', 'Squirrel', 'Kivy', 'Bash', 'Git', 'Arduino Uno', 'Electric Imp'
  ],
  'biopic': 'images/me2.jpg'
};

/*****************
 ** Bio Display **
 ****************/
bio.display = function() {
  var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);

  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $('#header').prepend(formattedHeaderRole);
  $('#header').prepend(formattedHeaderName);
  $('#header').append(formattedWelcomeMsg);

  if (bio.skills !== undefined && bio.skills.length !== 0) {
    formattedSkillsStart = HTMLskillsStart.replace('%data%', 'Skills');
    $('#header').append(formattedSkillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('.skills_:last').append(formattedSkill);
    }
  }
  $('#header').append(formattedBioPic);
  if (bio.contacts !== undefined || bio.contacts.length !== 0) {
    $('#header').append(HTMLcontactStart);
    if (bio.contacts.mobile !== undefined && bio.contacts.mobile !== '') {
      formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
      $('#topContacts').append(formattedMobile);
      $('#footerContacts').append(formattedMobile);
    }
    if (bio.contacts.email !== undefined && bio.contacts.email !== '') {
      formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
      $('#topContacts').append(formattedEmail);
      $('#footerContacts').append(formattedEmail);
    }
    if (bio.contacts.twitter !== undefined && bio.contacts.twitter !== '') {
      formattedTwitter = HTMLtwitter.replace('%data%', 'Twitter');
      formattedTwitter = formattedTwitter.replace('#', bio.contacts.twitter);
      $('#topContacts').append(formattedTwitter);
      $('#footerContacts').append(formattedTwitter);
    }
    if (bio.contacts.linkedin !== undefined && bio.contacts.linkedin !== '') {
      formattedLinkedin = HTMLlinkedin.replace('%data%', 'LinkedIn');
      formattedLinkedin = formattedLinkedin.replace('#', bio.contacts.linkedin);
      $('#topContacts').append(formattedLinkedin);
      $('#footerContacts').append(formattedLinkedin);
    }
    if (bio.contacts.github !== undefined && bio.contacts.github !== '') {
      formattedGithub = HTMLgithub.replace('%data%', 'Github');
      formattedGithub = formattedGithub.replace('#', bio.contacts.github);
      $('#topContacts').append(formattedGithub);
      $('#footerContacts').append(formattedGithub);
    }
    if (bio.contacts.blog !== undefined && bio.contacts.blog !== '') {
      formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
      formattedBlog = formattedBlog.replace('#', bio.contacts.blog);
      $('#topContacts').append(formattedBlog);
      $('#footerContacts').append(formattedBlog);
    }
    if (bio.contacts.location !== undefined && bio.contacts.location !== '') {
      formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
      $('#topContacts').append(formattedLocation);
      $('#footerContacts').append(formattedLocation);
    }
  }
};

/***************
 ** Education **
 ***************/
var education = {
  'schools': [
    {
      'name': 'University of Stuttgart',
      'location': 'Stuttgart, Germany',
      'degree': 'Diplom Engineer (equivalent to MSc)',
      'majors': ['Control Systems Engineering'],
      'dates': 2014,
      'url': 'https://www.uni-stuttgart.de/studieren/angebot/studiengang/Technische_Kybernetik_M.Sc./?__locale=en'
    }, {
      'name': 'Norwegian University of Science and Technology',
      'location': 'Trondheim, Norway',
      'degree': 'Exchange student',
      'majors': ['Control Systems Engineering', 'Unicorn Science'],
      'dates': 2014,
      'url': 'http://www.ntnu.no/studier/mttk/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Web Developer Nanodegree',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    },
    {
      'title': 'Learning How to Learn: Powerful mental tools to help you master tough subjects',
      'school': 'Coursera',
      'date': 2015,
      'url': 'https://www.coursera.org/learn/learning-how-to-learn'
    },
    {
      'title': 'Control of Mobile Robots',
      'school': 'Coursera',
      'date': 2014,
      'url': 'https://www.coursera.org/course/conrob'
    }
  ]
};


/***********************
 ** Education Display **
 ***********************/
education.display = function() {
  if (education.hasOwnProperty('schools') && education.schools.length > 0) {
    for (var i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);
      formattedSchoolName = HTMLschoolName.replace('%data%',
        education.schools[i].name);
      if (education.schools[i].url !== undefined && education.schools[i].url !== '') {
        formattedDegreeUrl = attachUrlIcon(education.schools[i].degree,
          education.schools[i].url);
        formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
          formattedDegreeUrl);
        formattedSchoolName = formattedSchoolName.replace('#',
          education.schools[i].url);
        $('.education-entry:last').append(formattedSchoolName +
          formattedSchoolDegree);
      } else {
        formattedSchoolDegree = HTMLschoolDegree.replace('%data%',
          education.schools[i].degree);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
      }
      formattedSchoolDates = HTMLschoolDates.replace('%data%',
        education.schools[i].dates);
      formattedSchoolLocation = HTMLschoolLocation.replace('%data%',
        education.schools[i].location);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      for (var j = 0; j < education.schools[i].majors.length; j++) {
        formattedSchoolMajor = HTMLschoolMajor.replace('%data%',
          education.schools[i].majors[j]);
        $('.education-entry:last').append(formattedSchoolMajor);
      }
    }
  }
  if (education.hasOwnProperty('onlineCourses') && education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
      formattedTitle = HTMLonlineTitle.replace('%data%',
        education.onlineCourses[k].title);
      formattedTitle = formattedTitle.replace('#', education.onlineCourses[k].url);
      formattedDegree = attachUrlIcon(education.onlineCourses[k].school,
        education.onlineCourses[k].url);
      formattedSchool = HTMLonlineSchool.replace('%data%',
        education.onlineCourses[k].school + HTMLurlIcon);
      formattedDates = HTMLonlineDates.replace('%data%',
        education.onlineCourses[k].date);

      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(formattedTitle + formattedSchool);
      $('.education-entry:last').append(formattedDates);
    }
  }
};

/************************
 ** Log clicks on page **
 ************************/
var logClicksFcn = function(loc) {
  console.log(loc);
  console.log(loc.pageX);
  console.log(loc.pageY);
  logClicks(loc.pageX, loc.pageY);
};

$(document).click(logClicksFcn);

$('#main').append(internationalizeButton);

function inName() {
  var arrayOfNames = bio.name.trim().split(' ');
  var internationalName = arrayOfNames[0].slice(0,1).toUpperCase() +
    arrayOfNames[1].slice(1).toLowerCase() + ' ' +
    arrayOfNames[1].toUpperCase();

  return internationalName;
}

/***********************************************
 ** Display bio, work, projects and education **
 ***********************************************/
work.display();
projects.display();
bio.display();
education.display();

$('#mapDiv').append(googleMap);
