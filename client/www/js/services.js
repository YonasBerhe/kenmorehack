angular.module('starter.services', [])
  .factory('Projects', function() {
    var projects = [{
      "name": "TaxWhere",
      "desc": "Make an application that show where tax money is going",
      "agen": [
        "7:00 AM Meet up with the group",
        "9:00 AM Discuss MVC",
        "2:00 PM Coffee"
      ],
      "prog": [
        "MVC 0.9 finished",
        "Wireframe done"
      ]
    }, {
      "name": "Greener City",
      "desc": "Project aims to grow more trees in Kenmore",
      "agen": [
        "5:00 AM Meet up with the group",
        "6:00 AM Planting Seed",
        "1:00 PM Lunch"
      ],
      "prog": [
        "90 trees planted",
        "45 trees planted"
      ]
    }, {
      "name": "Recycle Kenmore",
      "desc": "We need help cleaning up Kenmore",
      "agen": [
        "10:00 AM Prepare at discussed location",
        "6:00 PM Clean up X St"
      ],
      "prog": [
        "100 streets cleaned",
        "10 street cleaned"
      ]
    }];

    var chosenProject;

    return {
      all: function() {
        return projects;
      },
      getRandom: function() {

        var tmp = Math.floor(Math.random() * projects.length);

        if (projects[tmp] === chosenProject){
          ++tmp;
        }

        chosenProject = projects[tmp];

        return chosenProject;
      },
      getChosen: function () {
        return chosenProject;
      }
    };

  })
  .factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'Ready to Rock?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Need to go...',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I got a cool gig',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
