module.exports = [
  {
    name: 'Languages',
    languages: [
      {
        name: 'Java',
        usedSince: 2019,
        blurb: 'I just recently started teaching myself Java to expand my skills.',
      },
      {
        name: 'JavaScript',
        usedSince: 2015,
        basics: [
          {
            title: 'current standard',
            blurb: "I'm always staying on top of changes to ECMAScript.",
          },
          {
            title: 'RESTful API',
            blurb: 'As a full-stack developer, I can get a wealth of data for any application.',
          },
        ],
        framework: {
          frontEnd: [
            {
              name: 'React',
              usedSince: 2016,
              blurb: 'The mainstay of front-end development',
            },
            {
              name: 'Redux',
              usedSince: 2016,
              blurb: 'Flux-inspired application state management library for React',
            },
            {
              name: 'React-Router',
              usedSince: 2017,
              blurb: 'Declarative navigational components',
            },
            {
              name: 'Vue.js',
              usedSince: 2019,
              blurb: 'A new, progressive framework and a personal favorite',
            },
            {
              name: 'Vuex',
              usedSince: 2019,
              blurb: 'Application state management library',
            },
            {
              name: 'Vue-Router',
              usedSince: 2019,
              blurb: 'Navigational components able to deeply integrate with Vue',
            },
          ],
          backEnd: [
            {
              name: 'Node.js',
              usedSince: 2016,
              blurb: "Well, it's Node. Do I really need to say anything at this stage?",
            },
            {
              name: 'Express.js',
              usedSince: 2016,
              blurb: "Let's face it, this is most everybody's go to web framework choice.",
            },
            {
              name: 'Passport.js',
              usedSince: 2016,
              blurb: 'Authentication for Express. So simple...',
            },
            {
              name: 'bcrypt',
              usedSince: 2017,
              blurb: 'Encryption package for secure log-in',
            },
            {
              name: 'MongoDB',
              usedSince: 2016,
              blurb: 'Easily-structured database',
            },
            {
              name: 'Mongoose',
              usedSince: 2016,
              blurb: 'Object modeling for MongDB',
            },
            {
              name: 'Typescript',
              usedSince: 2018,
              blurb: 'Strongly-typed superset of JavaScript',
            },
          ],
        },
      },
      {
        name: 'HTML',
        usedSince: 2015,
        blurb:
          'After a 20 year hiatus, I started to build websites again to transition to a new career.',
      },
      {
        name: 'CSS',
        usedSince: 2015,
        blurb:
          "It's the same with CSS as HTML, except I now use SCSS for dynamic and easy to update stylesheets.",
      },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      {
        name: 'Responsive Web Development',
        usedSince: 2015,
        blurb: 'The mobile web is too important to ignore.',
      },
      {
        name: 'Git',
        usedSince: 2015,
        blurb: 'Um, yeah, version control.',
      },
      {
        name: 'Functional Programming',
        usedSince: 2018,
        blurb:
          'A paradigm that strives to reduce errors by using functions in such a way to avoid changing state and mutable data.',
      },
    ],
  },
];
