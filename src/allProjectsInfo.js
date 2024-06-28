export const allPersonalProjects = []
export const allSchoolProjects = []
export const allWorks = []

// all images should use relative paths instead of absolute paths. So then the final path would be "{domain nam}/{basename declared in BrowserRouter which is in this case "/portfolio"}/{image}"

allPersonalProjects.push(
    {   "type": "P",
        "name": "PollAndVote",
        "description_short": "Polling application",
        "description": "A web application that allows users to create and view polls, as well as vote on them if they have not already ended",
        "techStack": [
            "Java", "Spring Boot (with Spring Data JPA, Spring MVC)","MySQL (hosted on AWS RDS)","React","HTML/CSS", "Javascript"
        ],
        "otherTech": [
            "Docker",
            "AWS ECR/ECS/Route 53/RDS/S3/CloudFront"
        ],
        "url": "https://pollandvote.csmortal.store",
        "repository": "https://github.com/CSmortal/PollAndVote",
        "status": "Deployed before, but now inactive",
        "image": "PollAndVote.PNG"
    }
)

allPersonalProjects.push(
    {
      "type": "P",
      "name": "JovenGrabsFood",
      "description_short": "Food Delivery platform",
      "description": "A web application that mimics a food delivery app, where merchants, deliverers, consumers can be onboarded. Merchants can create food items and customise options, and can reject or accept orders. Consumers can order food from any merchant, and if their order is accepted by all relevant merchants, their order will be visible in a real-time system for deliverers to pick up their order",
      "techStack": [
          "NodeJS", "MongoDB", "PostgreSQL", "React", "Javascript"
      ],
      "otherTech": [
          "AWS Cloudfront, S3", "SocketIO"
      ],
      "url": "",
      "repository": "https://github.com/CSmortal/JovenGrabsFood",
      "status": "Yet to deploy",
      "image": "JovenGrabsFood.PNG"
    }
)

allPersonalProjects.push(
  {
    "type": "P",
    "name": "QuerIt",
    "description_short": "Geolocation-enabled chat rooms that allow anonymity",
    "description": "An Android application that allows users to join geolocation-enabled chat rooms anonymously, based on their current location, to ask and view questions, and make comments, as well as upvote/downvote them.",
    "techStack": [
        "Flutter", "Firebase"
    ],
    "otherTech": [],
    "url": "",
    "repository": "https://github.com/CSmortal/QuerIt",
    "status": "Finished, but not deployed",
    "image": "QuerIt.png"
  }
)

allSchoolProjects.push(
  {
    "type": "S",
    "name": "MeetCode",
    "description_short": "A collaborative Leetcode",
    "description": "A microservice application that allows users to collaborate on programming problems together that are of the same difficulty",
    "role": "Created the matching service (deployed independently as an AWS ECS service) for users to match with another user looking for the same problem difficulty",
    "techStack": [
      "PostgreSQL", "NodeJS"
    ],
    "otherTech": [
      "Sequelize ORM", "SocketIO"
    ],
    "url": "",
    "repository": "https://github.com/CSmortal/MeetCode",
    "image": "MeetCode.png"
  }
)


allWorks.push(
    {
      "type": "W",
      "name": "TemiAnnouncer",
      "description_short": "Versatile announcer",
      "description": "An Android application (built during my internship at Robosolutions Pte Ltd) on Temi (autonomous robot) that helped to automate food delivery and patient escorting at a clinic by allowing staff to select a seat/room number on the app, and Temi would give auditory instructions while delivering the food/escorting the patient",
      "role": "Implementation from start to finish, built alone",
      "techStack": [
        "Java", "Android SDK"
      ],
      "otherTech": [],
      "url": "The repository is private, the link below is for the user guide I wrote",
      "repository": "https://github.com/temideveloper/Rs-App-Guides/tree/master/TemiAnnouncer",
      "image": "TemiAnnouncer.jpg"
    }
)

allWorks.push(
  {
    "type": "W",
    "name": "TemiConcierge",
    "description_short": "Highly configurable robot concierge",
    "description": "An Android application (built during my internship at Robosolutions Pte Ltd) on Temi (autonomous robot) that provides concierge services such as listing nearby dining options, calling relevant staff by purpose of visit or name, to enhance visitor experience of client’s visitors",
    "role": "Implementation from start to finish, built alone",
    "techStack": [
      "Java", "Android SDK"
    ],
    "otherTech": [],
    "url": "The repository is private, the link below is for the user guide I wrote",
    "repository": "https://github.com/temideveloper/Rs-App-Guides/tree/master/TemiConcierge",
    "image": "TemiConcierge.gif"
  }
)

allWorks.push(
  {
    "type": "W",
    "name": "Glassbowl Initiative",
    "description_short": "Collate user data through submitted web forms",
    "description": "A web form (built during my freelance role at DateIdeas Pte Ltd) supported with a backend that allows users to submit the web form with their data, and get an image back to obtain freebies. The collated data can then be retrieved and exported into a CSV, by the company",
    "role": "Implemetation from start to finish, focusing on backend, built in a team of 3",
    "techStack": [
      "NodeJS", "React", "Javascript", "PostgreSQL"
    ],
    "otherTech": [
      "Twilio APIs", "ElephantSQL", "AWS S3"
    ],
    "url": "",
    "repository": "Private",
    "image": "DateIdeas.png"
  }
)