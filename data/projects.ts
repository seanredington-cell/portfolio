/**
 * Project Data
 * 
 * Placeholder data for 5 projects.
 * Replace with your actual project information and images.
 */

export interface ProjectContent {
  type: 'heading' | 'paragraph' | 'image' | 'list' | 'callout';
  content: string;
  level?: 1 | 2 | 3; // For headings
  alt?: string; // For images
  items?: string[]; // For lists
  italic?: boolean; // For callouts
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tldr?: string; // Short TLDR summary for project detail page
  image?: string;
  mobileImage?: string; // Flat composited image for mobile snap view (avoids layered image memory cost)
  layeredImages?: {
    background: string;
    foreground?: string;
    floatingIcons?: Array<{
      src: string;
      position: string;
    }>;
    floatingDevices?: Array<{
      src: string;
      position: string;
    }>;
    floatingCards?: Array<{
      src: string;
      position: string; // 'top-right' | 'middle-right' | 'bottom-right' | 'top-left' | 'middle-left' | 'bottom-left'
    }>;
  };
  heroLayers?: {
    background: string;
    headshot: string;
    writing: string;
    logoWorkday: string;
    logoCygnvs: string;
    logoGetmee: string;
    logoMarlin: string;
  };
  imagePlaceholder: string;
  isHero?: boolean;
  tagline?: string;
  company?: string;
  logo?: string;
  logoPlaceholder?: string;
  logoColor?: string;
  accentColor?: string; // RGB values for dynamic theming
  tags?: {
    sector?: string;
    role?: string;
    timeline?: string;
  };
  detailContent?: ProjectContent[];
  readTime?: number;
}

const _allProjectData: Project[] = [
  {
    id: "hero",
    name: "Seán Redington",
    tagline: "I'm a practical problem solver that does more than push pixels.\nI drive real user impact for Fortune 500 companies, startups and agencies.",
    description: "I'm a practical problem solver that does more than push pixels. I drive real user impact for Fortune 500 companies, startups and agencies.",
    heroLayers: {
      background: "/about-hero/background colour.webp",
      headshot: "/about-hero/headshot-image.webp",
      writing: "/about-hero/writing.webp",
      logoWorkday: "/about-hero/logo-workday.webp",
      logoCygnvs: "/about-hero/logo-cygnvs.webp",
      logoGetmee: "/about-hero/logo-getmee.webp",
      logoMarlin: "/about-hero/logo-marlin.webp",
    },
    imagePlaceholder: "Profile Image",
    logo: "/about-hero/headshot-image.webp",
    logoPlaceholder: "👨‍💼",
    logoColor: "#FBBF24",
    accentColor: "251, 191, 36", // Yellow/Amber
    tags: {
      sector: "6+ years",
      role: "Dublin",
      timeline: "Product Designer",
    },
    isHero: true,
  },
  {
    id: "getmee",
    company: "GETMEE AI",
    name: "AI-Powered Job Readiness Platform",
    description: "How systems thinking turned a collection of isolated features into a connected product — doubling the userbase across 15+ white-label apps",
    tldr: "How systems thinking turned a collection of isolated features into a connected product — doubling the userbase across 15+ white-label apps",
    image: "/projects/getmee/Getmee_whitelabel_app_prior_to_arrival.webp",
    layeredImages: {
      background: "/projects/getmee/hero/background.webp",
      foreground: "/projects/getmee/hero/front.webp",
      floatingCards: [
        { src: "/projects/getmee/hero/card-1.webp", position: "top-right" },
        { src: "/projects/getmee/hero/card-2.webp", position: "middle-right" },
        { src: "/projects/getmee/hero/card-3.webp", position: "bottom-right" },
      ],
    },
    imagePlaceholder: "Getmee Platform Screenshot",
    logo: "/projects/getmee/logo.svg",
    logoPlaceholder: "📚",
    logoColor: "#E17033",
    accentColor: "225, 112, 51", // Orange
    tags: {
      sector: "EdTech",
      role: "Head of Product & Design",
      timeline: "12 months",
    },
    readTime: 8,
  },
  {
    id: "registration-crisis",
    company: "CYGNVS",
    name: "Registration in the Time of a Crisis",
    description: "Reducing the error rate of registration from 50% to less than 2% during cyber incidents, solving over 60 registration paths to ensure users can quickly access their colleagues in CYGNVS.",
    tldr: "Solving over **60 registration paths** and **reducing the error rate from 50% to less than 2%** in the event of a cyber incident to ensure that users can get access to their colleagues in CYGNVS.",
    layeredImages: {
      background: "/projects/registration-crisis/registrayion-hero-bg.svg",
      foreground: "/projects/registration-crisis/registration-hero.webp",
      floatingIcons: [
        { src: "/projects/registration-crisis/🤯.webp", position: "top-left" },
        { src: "/projects/registration-crisis/😡.webp", position: "top-right" },
        { src: "/projects/registration-crisis/❌.webp", position: "bottom-left" },
      ],
    },
    imagePlaceholder: "Registration Project Image",
    logo: "/icon-cygnvs-2.webp",
    logoPlaceholder: "🔐",
    logoColor: "#1E3A8A",
    accentColor: "30, 58, 138", // Dark Blue
    tags: {
      sector: "Cybersecurity",
      role: "Lead UX Designer",
      timeline: "6 months",
    },
    readTime: 4,
    detailContent: [
      { type: 'heading', content: 'Background', level: 2 },
      { type: 'paragraph', content: 'CYGNVS is a collaborative out-of-band incident response platform. Users need to be able to be connected with their colleagues on the platform in the event that they lose access to their work email.' },
      { type: 'paragraph', content: 'As a result there is a large amount of ways a user can get access to the platform, many of which had been neglected for some time, leading to registration dead ends and significant user and customer dissatisfaction.' },

      { type: 'heading', content: 'Problem', level: 2 },
      { type: 'paragraph', content: 'During an incident experienced by one of our customers, only 12 out of 25 invited users were able to complete registration leading them to have our support team mend the issue and the relationship. This dramatically delayed their incident response plan at a moment when time is most critical.' },
      { type: 'paragraph', content: 'We realised that their issues were varied and not unique and would need to be fixed in order for our product to scale successfully.' },
      { type: 'paragraph', content: 'Users need to be able to onboard to CYGNVS easily when they are invited. When onboarding users to CYGNVS before an incident has occurred, users need to be able to be associated with their colleagues and register and sign in to CYGNVS without any issues so that they are prepared in the event that an incident occurs.' },
      { type: 'paragraph', content: 'When an incident occurs and users no longer have access to their work accounts, users need to be able to be invited and register quickly and securely for CYGNVS. They need to be associated with their colleagues so that they can begin to work together to resolve the incident as easily as possible.' },

      { type: 'heading', content: 'Goal', level: 2 },
      {
        type: 'list',
        content: '',
        items: [
          'Reduce the 50% error rate of registration during an incident',
          'Significantly reduce the proportion of support cases that came in related to registration and sign in',
          'Identify and solve for all possible registration and sign in paths'
        ]
      },

      { type: 'heading', content: 'Process', level: 2 },
      { type: 'heading', content: 'Understanding the scale of the problem', level: 3 },
      { type: 'paragraph', content: 'To start, working with a product manager, we mapped out all 65 existing registration and sign in flows on our platform. Many of these were problematic, leading to dead ends or requiring support intervention. This complexity arose from our diverse registration methods, with each security layer multiplying the number of paths.' },
      { type: 'image', content: '/projects/registration-crisis/reg-image-1.png', alt: 'All registration flows mapped' },

      { type: 'heading', content: 'Defining the flow', level: 3 },
      { type: 'paragraph', content: 'Working with internal stakeholders from all levels within the company, I created and iterated on a number of task flows which encompassed each of these flows. These were heavily scrutinised to ensure that all cases of registration were accounted for.' },
      { type: 'image', content: '/projects/registration-crisis/task-flow.png', alt: 'Task flow diagram' },

      { type: 'heading', content: 'User testing', level: 3 },
      { type: 'paragraph', content: 'After a number of different ideation sketches and lo-fi mock ups were made and discussed with the stakeholders, high fidelity wire frames were created on both web and mobile that would be used to test the registration flow.' },
      { type: 'image', content: '/projects/registration-crisis/user-testing-screens.png', alt: 'User testing screens' },
      { type: 'paragraph', content: 'The flows were tested on mobile by 11 participants with no prior knowledge of the product using Optimal Workshop.' },
      { type: 'image', content: '/projects/registration-crisis/user-test-results.png', alt: 'User test results' },
      { type: 'paragraph', content: 'The main takeaways were as follows:' },
      {
        type: 'list',
        content: '',
        items: [
          'The copy was difficult to understand, especially in a crisis',
          'Users were frustrated and confused at being asked for their work email address given that it had been compromised',
          'Users appreciated the level of security to register given the scenario'
        ]
      },
      { type: 'callout', content: 'Note: Due to our existing design library and the simplicity of the UI we were building, I focussed my time iterating on the flow and the copy as opposed to the UI as there was significantly more to be gained in that area.', italic: true },

      { type: 'heading', content: 'Iterating and re-testing', level: 3 },
      { type: 'paragraph', content: 'Realising that our user\'s main pain points were in relation to the copy, I made updates and again tested, this time internally with users that were seeing the new flows for the first time. While there were some hiccups, we were confident in our flow as a whole after this round of testing.' },
      { type: 'paragraph', content: 'After discussing the findings and iterations with the wider team, I worked on delivering fully spec\'d out flows to our development teams on both web and mobile.' },
      { type: 'image', content: '/projects/registration-crisis/mobile-final.png', alt: 'Final mobile designs' },

      { type: 'heading', content: 'Quickly addressing new requirements', level: 3 },
      { type: 'paragraph', content: 'This project was fast-tracked due to it\'s importance and was being built by the development teams as the design continued to iterate. Due to this, we were fortunate to have users get access to our updated flows, and after some usage we learnt there was a key problem area that we needed to address urgently:' },
      { type: 'callout', content: 'As a user that has been invited to CYGNVS during an incident and no longer has access to my work email, I need to be able to instantly gain access to the platform so that I can collaborate with my colleagues and begin to resolve the issue.', italic: true },
      { type: 'paragraph', content: 'Based off this, we kicked off a secondary project which allowed users quick access to the platform for a limited time, before requiring them to complete registration. This project again was done with security at the forefront and was fast tracked due to it\'s business advantage.' },
      { type: 'image', content: '/projects/registration-crisis/quick-access.png', alt: 'Quick access flow' },

      { type: 'heading', content: 'Impact', level: 2 },
      {
        type: 'list',
        content: '',
        items: [
          '2000+ new companies and over 5000 new unique users have registered for the platform, an increase of 300% prior to its release',
          'Reduction in error rate from 50% to less than 2%. In a recent incident, 67 new members were invited to CYGNVS and 66 of them registered successfully without issue',
          'We solved for over 50 of the 65 flows in registration. The cases which weren\'t addressed were related to users that were already invited to the platform before the changes were made, but hadn\'t registered. We worked with support to ensure they had the knowledge to solve them for users'
        ]
      },

      { type: 'heading', content: 'Learnings', level: 2 },
      { type: 'paragraph', content: 'This project required lots of work across teams and different geographies. At the beginning it was difficult to co-ordinate and communicate effectively across different timezones and teams meaning decisions were often miscommunicated or not shared out properly. To combat this, we only had the key decision makers in each meeting, and then had a document which was our source of truth and tracked all of the key decisions.' },
    ],
  },
  {
    id: "bua",
    company: "BUA",
    name: "Enabling Informed Match Day Decisions",
    description: "Designed and built by me - this iOS app allows field sport coaches to easily track game data, enabling them to be more informed when picking their team.",
    tldr: "**Designed and built by me,** - the following details the design process and implementation of an iOS app which **allows field sport coaches** to easily **track game data, enabling them to be more informed** when picking their team. I describe the research, **design and implementation** phases and give **my experiences using Claude Code for the first time.**",
    layeredImages: {
      background: "/projects/bua/hero/bua-hero-bg.webp",
      foreground: "/projects/bua/hero/bua-hero-foreground.webp",
    },
    imagePlaceholder: "Bua App Screenshot",
    logo: "/projects/bua/bua-icon.webp",
    logoPlaceholder: "⚽",
    logoColor: "#177272",
    accentColor: "23, 114, 114", // Dark green/teal
    tags: {
      sector: "Sports Tech",
      role: "Development, UX Design",
      timeline: "3 months",
    },
    readTime: 7,
    detailContent: [
      { type: 'heading', content: '📺 If you just want to watch the demo, here you go!', level: 2 },
      { type: 'paragraph', content: 'See the app in action: https://www.loom.com/share/5859ca8ec35a4ba19bb856ac5d773071' },
      { type: 'heading', content: '⏮️ Some background:', level: 2 },
      { type: 'paragraph', content: 'Each weekend, it\'s estimated that there are over 3,000 competitive GAA (sporting) matches across Ireland.' },
      { type: 'paragraph', content: 'At the highest levels, teams have expensive game monitoring tools which record information from the matches, allowing management teams to review and gather insights.' },
      { type: 'paragraph', content: 'In most cases, however, these teams will have someone on the sideline with a pen and paper, taking down key stats that the management team can reference at half and full time.' },
      { type: 'paragraph', content: 'My Dad is one of those people on the sideline. He\'s been coaching teams for almost 40 years. His main gripes are that it rains a lot in Ireland (not something I can fix as of yet) and that paper gets lost between games meaning he has to rely on his memory of matches for information.' },
      { type: 'image', content: '/projects/bua/image 1.png', alt: 'Coaching on the sideline' },
      { type: 'heading', content: '🤓 Research:', level: 2 },
      { type: 'heading', content: 'A conversation with the boss', level: 3 },
      { type: 'paragraph', content: 'For this project, I wanted to better understand the problems of one specific user; my Dad. I needed to know his main pain points so that I could figure out the best way I could help. After some discussion with him around, the main takeaways were:' },
      { type: 'paragraph', content: '' },
      {
        type: 'list',
        content: '',
        items: [
          'Being involved with multiple teams within the same club makes it tricky to remember details of matches, especially ones that happened some time ago.',
          'Helping players improve is incredibly difficult, especially if you don\'t know where their strengths and weaknesses really lie.',
          'It\'s hard to know how you\'re comparing to previous matches - how do you know who\'s playing well and who isn\'t?',
          'Having numbers help to take emotion out of decisions on the sideline. They can be crucial in determining what needs to be adjusted on the pitch.'
        ]
      },
      { type: 'heading', content: 'So, he wants to be able to track information over time…', level: 3 },
      { type: 'paragraph', content: 'I tried to distill these things into a single problem statement to help when finding a solution:' },
      { type: 'callout', content: 'As a coach that is working with a number of different teams within the same club, that likes to keep track of how the players are performing, I need to be able to track teams and player performance in matches over time so that I can be informed on who is performing well and who isn\'t.', italic: true },
      { type: 'heading', content: 'Is there already a solution?', level: 3 },
      { type: 'paragraph', content: 'There are some options out there, but they were generally either expensive or difficult to use. Even when broadening the scope to other, more popular, field sports (soccer or hockey) there didn\'t seem to be anything that fit the bill. The image below is a review of what I found with comments relating to its ability to meet the needs I\'d established so far.' },
      { type: 'image', content: '/projects/bua/image 2.png', alt: 'Existing solutions research' },
      { type: 'image', content: '/projects/bua/placeholder.png', alt: 'Placeholder image' },
      { type: 'heading', content: 'What Now?', level: 3 },
      { type: 'paragraph', content: 'It was at this point, that a couple of rough conversations turned into a project that sparked inspiration in me. I quickly got to work and described a rough sketch of what this project end goal might look like.' },
      { type: 'heading', content: 'The output of this project must do a few things', level: 3 },
      {
        type: 'list',
        content: '',
        items: [
          'Users are able to keep a record of the games that a number of different teams have played.',
          'Users can view key information about players and teams from within some interface.',
          'This tool is better than a piece of paper for tracking stats over time.'
        ]
      },
      { type: 'heading', content: 'Design Process', level: 2 },
      { type: 'paragraph', content: 'Initial exploration included a paper-based template system, but this proved technically challenging and limited. I pivoted to a digital solution, sketching multiple task flows for starting games and capturing stats.' },
      { type: 'image', content: '/projects/bua/image 3.png', alt: 'Initial sketches' },
      { type: 'paragraph', content: 'After user testing different flow options, we landed on the optimal approach. At this point, I committed to actually building the app - a decision that focused the design process on simplicity and real value.' },
      { type: 'image', content: '/projects/bua/image 5.png', alt: 'Design iterations' },
      { type: 'heading', content: 'Key Features', level: 2 },
      { type: 'paragraph', content: 'Multi-user support, recording different stat types for home and away teams during matches, support for multiple teams within the same club, and tracking team and player data over time.' },
      { type: 'image', content: '/projects/bua/image 6.png', alt: 'High fidelity designs' },
      { type: 'heading', content: 'Build Process', level: 2 },
      { type: 'paragraph', content: 'Using Cursor for code editing, Claude Code for code writing, XCode for iOS development, and Supabase for backend/data management. The process involved extensive prompting, iterating, and testing - learning to provide nuanced instructions to get functional results.' },
      { type: 'image', content: '/projects/bua/image 7.png', alt: 'Development tools' },
      { type: 'image', content: '/projects/bua/image 8.png', alt: 'Development progress' },
      { type: 'heading', content: 'The Result', level: 2 },
      { type: 'paragraph', content: 'The finished app is now being tested on pitches around Ireland. Users can create teams and players, record match information, and get performance insights relative to peers.' },
      { type: 'image', content: '/projects/bua/Bua_-Home_Page.png', alt: 'Bua home page' },
      { type: 'image', content: '/projects/bua/Record_Matches.png', alt: 'Recording matches' },
      { type: 'image', content: '/projects/bua/Teams.png', alt: 'Teams view' },
      { type: 'image', content: '/projects/bua/Player_Profiles.png', alt: 'Player profiles' },
      { type: 'heading', content: 'Impact', level: 2 },
      { type: 'paragraph', content: 'While not yet a billion-dollar venture, I\'m immensely proud that my dad loves and actively uses the app almost every weekend (and reports bugs!). The project taught me valuable lessons about building and the potential for designers to become makers.' },
    ],
  },
  {
    id: "regulatory-reporting",
    company: "CYGNVS",
    name: "Regulatory Reporting",
    description: "Patented product that uses LLMs to empower users impacted by a cyber security incident to stay compliant with government regulations through collaboration and reporting.",
    layeredImages: {
      background: "/projects/regulatory-reporting/reporting-hero-bg.webp",
      floatingIcons: [
        { src: "/projects/regulatory-reporting/reporting-icon-2.svg", position: "top-left" },
        { src: "/projects/regulatory-reporting/reporting-icon-1.svg", position: "top-right" },
        { src: "/projects/regulatory-reporting/reporting-icon-3.svg", position: "middle-left" },
        { src: "/projects/regulatory-reporting/reporting-icon-5.svg", position: "middle-right" },
        { src: "/projects/regulatory-reporting/reporting-icon-4.svg", position: "bottom-center" },
      ],
    },
    imagePlaceholder: "Regulatory Reporting Screenshot",
    logo: "/icon-cygnvs-2.webp",
    logoPlaceholder: "📊",
    logoColor: "#3B82F6",
    accentColor: "59, 130, 246", // Blue
    tags: {
      sector: "Cybersecurity",
      role: "Lead UX Designer",
      timeline: "6 months",
    },
    readTime: 7,
    detailContent: [
      { type: 'heading', content: 'Project Overview', level: 2 },
      { type: 'paragraph', content: 'Patented product that uses LLMs to empower users impacted by a cyber security incident to stay compliant with government regulations by collaborating with their law firm in a safe space and reporting the incident\'s impact.' },
      { type: 'paragraph', content: 'A cyber security incident is an unwanted or unexpected cyber security event, or a series of such events, that has compromised business operations.' },
      { type: 'heading', content: 'Background', level: 2 },
      { type: 'paragraph', content: 'New laws introduced by the U.S. Securities and Exchange Commission (SEC) require companies to report if a cyber incident has occurred. CYGNVS is a collaborative out-of-band incident response platform. Due to the functionality of CYGNVS, we explored if the platform could be used to help people comply with these new laws.' },
      { type: 'image', content: '/projects/regulatory-reporting/Notes_on_V1_of_Reporting.png', alt: 'Notes on V1 of Reporting' },
      { type: 'heading', content: 'Problem', level: 2 },
      { type: 'paragraph', content: 'The new laws require companies to report on various factors to both federal and state governments within a short timeframe. Failure to comply can lead to severe consequences including large fines and jail time.' },
      { type: 'paragraph', content: 'Users need to be able to collaborate on filing a report using CYGNVS. As the IT security lead in a company that has had customer information leaked, I need to be able to collaborate with my company\'s law-firm in a secure space so that I can work with them in completing the necessary reports.' },
      { type: 'heading', content: 'Goal', level: 2 },
      { type: 'paragraph', content: 'Use the existing functionality of the platform as the foundation for this feature. Create a \'kick-ass demo\' that could be used by sales to generate leads and revenue for the company.' },
      { type: 'heading', content: 'Phase 1: Using What We Have', level: 2 },
      { type: 'paragraph', content: 'We explored if solving the user problems was something we could do well within CYGNVS. The platform is structured using Rooms (workspaces) and Workstreams (channels). I identified that by changing how we displayed one of our modules from a table to a form, we could make it simple for users to capture information about the report.' },
      { type: 'image', content: '/projects/regulatory-reporting/Untitled.png', alt: 'CYGNVS platform structure' },
      { type: 'image', content: '/projects/regulatory-reporting/Table_to_form.png', alt: 'Table to form transformation' },
      { type: 'heading', content: 'Phase 2: Complete Reports in CYGNVS', level: 2 },
      { type: 'paragraph', content: 'We created a library of all reports which allowed users to search and filter. For submission, users could lock a version of the report which would be saved as a correctly formatted PDF ready for submission. Users could unlock to continue working while maintaining version history.' },
      { type: 'image', content: '/projects/regulatory-reporting/Report_Library.png', alt: 'Report library interface' },
      { type: 'image', content: '/projects/regulatory-reporting/Submission.png', alt: 'Report submission flow' },
      { type: 'heading', content: 'Phase 3: Leveraging Room Data', level: 2 },
      { type: 'paragraph', content: 'Within a Room, lots of information was being captured in different workstreams. We surfaced relevant information within a report to assist users through a side panel that showed related information, allowing them to leverage this information to ensure reports were filled out correctly.' },
      { type: 'image', content: '/projects/regulatory-reporting/Side_panel_iterations.png', alt: 'Side panel iterations' },
      { type: 'image', content: '/projects/regulatory-reporting/Report_with_Side_panel.png', alt: 'Report with side panel' },
      { type: 'heading', content: 'Phase 4: Keeping Information Up to Date', level: 2 },
      { type: 'paragraph', content: 'Linking information from outside the report to fields within the report created complex scenarios. I created a task flow that included all possible actions when a user selected a field. We added a field-level activity log that tracked all updates for compliance purposes.' },
      { type: 'image', content: '/projects/regulatory-reporting/Task_Flow_Reporting.png', alt: 'Task flow for reporting' },
      { type: 'image', content: '/projects/regulatory-reporting/Linking.png', alt: 'Linking information flow' },
      { type: 'image', content: '/projects/regulatory-reporting/Activity_log.png', alt: 'Activity log interface' },
      { type: 'heading', content: 'Phase 5: Efficient Collaboration', level: 2 },
      { type: 'paragraph', content: 'Moving the comment section to a field level allowed users to contextually comment while being able to see the updates that had taken place on that field.' },
      { type: 'image', content: '/projects/regulatory-reporting/Updates.png', alt: 'Field-level updates and comments' },
      { type: 'heading', content: 'Phase 6: Guiding Users', level: 2 },
      { type: 'paragraph', content: 'By adding suggested reports based on information in other workstreams, we helped users that knew they needed to fill out reports but were unsure which ones. Using a universal sentence encoder, we greatly increased the accuracy and speed of recommendations.' },
      { type: 'image', content: '/projects/regulatory-reporting/Report_Suggestions.png', alt: 'Report suggestions feature' },
      { type: 'heading', content: 'Impact', level: 2 },
      { type: 'paragraph', content: 'This unique collaboration feature is patent pending. Our sales pitch completely shifted to have this feature at the forefront. Modules built are being re-used across the platform to improve overall UX. An entire development team, PM and designer are now working to iterate on it based on customer interest.' },
      { type: 'heading', content: 'Learnings', level: 2 },
      { type: 'paragraph', content: 'The phased approach allowed us to constantly build while having natural stopping points if priorities shifted. However, limited access to key users (lawyers) meant we could have built something that better catered to their needs with more direct feedback.' },
    ],
  },
  {
    id: "workday-help",
    company: "WORKDAY",
    name: "Workday Help",
    description: "Optimising Workday's fastest selling product for web and mobile apps.",
    tldr: "Workday Help became **Workday's fastest selling product**. It provides HR knowledge and case management solutions that helps employees find the information they need faster.",
    layeredImages: {
      background: "/projects/workday-help/wday-mac-m.webp",
      floatingDevices: [
        { src: "/projects/workday-help/wday-phone-L.webp", position: "left" },
        { src: "/projects/workday-help/wday-phone-R.webp", position: "right" },
      ],
    },
    imagePlaceholder: "Workday Help Screenshot",
    logo: "/wday-logo.webp",
    logoPlaceholder: "💼",
    logoColor: "#E65100",
    accentColor: "230, 81, 0", // Darker Workday Orange
    tags: {
      sector: "Enterprise HR",
      role: "Sr. Associate Product Designer",
      timeline: "18 months",
    },
    readTime: 4,
  },
];

export const heroData: Project = _allProjectData[0];
export const projectData: Project[] = _allProjectData.slice(1);
