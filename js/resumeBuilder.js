//Latest Version! 10/16/2017

var bio = {
    "name": "Scott Dickinson",
    "role": "Web & People Developer",
    "contacts": {
        "mobile": "256-714-1803",
        "email": "culer5@.gmail.com",
        "github": "culer5",
        "twitter": "@ratpack30s",
        "location": "Huntsville, AL"
    },
    "welcomeMessage": "The pessimist sees difficulty in every opportunity.The optimist sees the opportunity in every difficulty. \u2014 Churchill",
    "skills": [
        "Leader", " Problem-solver", " Teacher", " Web Developer"
    ],
    "biopic": "images/me.jpg"
};


bio.display = function () {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }

    }

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

bio.display();

var education = {
    "schools": [{
            "name": "Troy University",
            "location": "Troy, AL",
            "degree": "BS",
            "dates": "In Progress",
            "majors": ["Applied Computer Science"]

        },
        {
            "name": "Faulkner University",
            "location": "Montgomery, AL",
            "degree": "BS",
            "dates": "1993-1995",
            "majors": ["Management of Human Resources"]
        },
        {
            "name": "Marion Military Institute",
            "location": "Marion, AL",
            "degree": "AS",
            "dates": "1986-1988",
            "majors": ["General Education"]
        }

    ],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Intro to HTML & CSS",
		"dates": "April-Oct 2017",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }]
};




var work = {
    "jobs": [{
            "employer": "AT&T",
            "title": "Area Manager",
            "location": "Huntsville, AL",
            "dates": "2007 - current",
            "description": "Operations manager with experience of successfully coordinating the activities various departments"
        },
        {
            "employer": "Schwarze Industries",
            "title": "Project Manager",
            "location": "Huntsville,AL",
            "dates": "1999-2007",
            "description": "Improved bid to work structure awareness to reduce underbidding by 20%. \nIncorporated efficiency performance measurements into individual reviews to relate company successes to career success."
        },
        {
            "employer": "Yum!",
            "title": "General Manager",
            "location": "Huntsville, AL",
            "dates": "1996-1999",
            "description": "Project discovery and planning: Guide work from client needs and idea to goals and delivery. \nPull together team leaders and account staff to research and define new products and budget. \nBuild and delegate work plans, communicating progress to account executives."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "HTML5 Canvas Game",
			"dates": "in progress",
            //"datesWorked": "in progress",
            "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
                "Nanodegree.",
            "images": ["images/frogger.jpg"]

        },
        {
            "title": "Online Portfolio",
			"dates": "October 2017",
           // "datesWorked": "October 2017",
            "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
                "Nanodegree.",
            "images": ["images/goodatstuff.jpg"]
        }
    ]
};



function displayWork() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        for (var i = 0, len = work.jobs.length; i < len; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkLocation.replace("%data%",work.jobs[i].dates);
        
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}
displayWork();

function displayEducation() {
    // $("#education").append(HTMLschoolStart);
    if (education.schools.length > 0) {
        for (var i = 0, len = education.schools.length; i < len; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var j = 0, eLen = education.onlineCourses.length; j < eLen; j++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
               // var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].completed);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}
displayEducation();




projects.display = function() {


    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        /* if (projects.projects[i].images.length > 0)*/
        {
            for (y = 0; y < projects.projects[i].images.length; y++) {
                var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[y]);
                $(".project-entry:last").append(formattedProjectImages);

            }
        }

    }
};

projects.display();


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].toLowerCase();

    return name[0] + " " + name[1];
}




$("mapDiv").append(googleMap);