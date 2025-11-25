// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "This is my Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-started-my-b-tech-degree-in-computer-science-and-engineering-at-iit-madras-i-had-a-strong-academic-performance-in-high-school-securing-two-kvpy-scholarships-qualifying-for-the-training-camps-for-the-international-physics-and-astronomy-olympiads-and-achieving-an-air-74-in-jee-advanced-2018",
          title: 'I started my B. Tech. degree in Computer Science and Engineering at IIT...',
          description: "",
          section: "News",},{id: "news-i-was-among-the-best-competitive-programmers-at-iit-madras-i-placed-in-the-top-200-participants-in-the-icpc-amritapuri-online-qualifiers-in-2019",
          title: 'I was among the best competitive programmers at IIT Madras. I placed in...',
          description: "",
          section: "News",},{id: "news-i-started-a-six-week-internship-at-godot-media-a-bangalore-based-startup-on-november-23-2020",
          title: 'I started a six-week internship at Godot Media, a Bangalore-based startup, on November...',
          description: "",
          section: "News",},{id: "news-i-began-an-11-week-internship-at-rubrik-india-on-may-24-2021-excited-to-work-with-the-blobstore-team",
          title: 'I began an 11-week internship at Rubrik India on May 24, 2021, excited...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-iit-madras-with-a-b-tech-degree-in-computer-science-and-engineering-as-part-of-my-bachelor-s-project-with-prof-nasre-s-group-i-worked-on-implementing-compiler-optimizations-for-a-graph-dsl-looking-forward-to-starting-my-master-s-degree-at-eth-zürich-in-two-months",
          title: 'I graduated from IIT Madras with a B. Tech. degree in Computer Science...',
          description: "",
          section: "News",},{id: "news-i-started-my-msc-degree-in-computer-science-at-eth-zürich-on-september-19-2022-after-moving-to-switzerland-10-days-earlier",
          title: 'I started my MSc degree in Computer Science at ETH Zürich on September...',
          description: "",
          section: "News",},{id: "news-on-november-14-2022-i-received-my-first-patent-my-work-along-with-others-in-prof-nasre-s-group-on-the-starplat-dsl-led-to-a-patent-hopefully-the-first-of-many-more-to-come",
          title: 'On November 14, 2022, I received my first patent! My work, along with...',
          description: "",
          section: "News",},{id: "news-our-work-on-maximus-which-i-contributed-to-during-my-semester-project-and-submitted-on-october-11-2024-has-been-accepted-at-sigmod-2025",
          title: 'Our work on Maximus, which I contributed to during my semester project and...',
          description: "",
          section: "News",},{id: "news-i-have-completed-my-master-s-thesis-with-scalable-parallel-computing-laboratory-at-eth-we-have-published-our-work-on-arxiv",
          title: 'I have completed my master’s thesis with Scalable Parallel Computing Laboratory at ETH....',
          description: "",
          section: "News",},{id: "news-graduated-with-an-msc-computer-science-degree-from-eth-zürich",
          title: 'Graduated with an MSc Computer Science degree from ETH Zürich!',
          description: "",
          section: "News",},{id: "news-excited-to-join-spcl-as-a-phd-student-looking-forward-to-learning-and-making-great-connections",
          title: 'Excited to join SPCL as a PhD student. Looking forward to learning and...',
          description: "",
          section: "News",},{id: "projects-master-thesis-ongoing",
          title: 'Master Thesis (ongoing)',
          description: "with the Scalable Parallel Computing Laboratory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-integrating-the-gpu-backend-into-the-maximus-db-engine",
          title: 'Integrating the GPU Backend Into the Maximus DB Engine',
          description: "Practical Work - Semester Project with the Systems Group",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-starplat-graph-dsl-program-analysis",
          title: 'StarPlat Graph DSL - Program Analysis',
          description: "Bachelor Project with Prof. Rupesh Nasre",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-a-study-of-stability-of-discrete-graph-optimization-problems",
          title: 'A Study of Stability of Discrete Graph Optimization Problems',
          description: "Undergraduate Research with Prof. Raghavendra Rao",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-software-engineering-internships",
          title: 'Software Engineering Internships',
          description: "My internships at Rubrik and Godot Media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%72%69%72%61%6D%63%68%61%6E%64%72%61%6E%32%35%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shriramch", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/_shriramch", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-2239-8534", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
