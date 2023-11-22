export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Web Development",
        subTitle: "Self-employed",
        date: "Sep 2023 - Present",
        description: "Working for clients around the world.",
      },
      {
        title: "Back-End Developer at Tabtarh",
        subTitle: "Full-time",
        date: "June 2020 - Sep 2023",
        description: "Design system, UI dev and web animations.",
      },
    ],
  },
  // {
  //   title: "Education",
  //   items: [
  //     {
  //       title: "Master's Degree in Computer Science",
  //       subTitle: "University of Paris",
  //       date: "2015 - 2016",
  //       description: "Specialized in web development.",
  //     },
  //     {
  //       title: "Bachelor's Degree in Computer Science",
  //       subTitle: "University of Paris",
  //       date: "2012 - 2015",
  //       description: "Specialized in web development.",
  //     },
  //   ],
  // },
  //   @NOTE: You can add more sections here
    {
      title: "Projects",
      items: [
        {
          title: "Telegram Bot",
          subTitle: "Gold trade chamber bot",
          date: "2023",
          description: "<p>Design and development of a Telegram group serving as a global gold trading room, using Laravel framework and Docker containers for a robust and scalable architecture.</p>" +
              "<p>Designed and implemented a Job Queue system to efficiently handle tasks such as fetching real-time prices and executing buy/sell transactions.</p>" +
              "<p>Orchestrated Job Queue using Supervisor, ensuring optimal resource allocation and maintaining high performance even during periods of heavy workload.</p>",
        },
        {
          title: "Online Shop",
          subTitle: "Chain store",
          date: "2023",
          description: "<p>Contributed to the back-end development of an e-commerce platform, focusing on creating and maintaining API endpoints for core functionalities.</p>" +
              "<p>Assisted in the design and implementation of a secure user authentication system, safeguarding user data and privacy.</p>",
        },
        {
          title: "Real Estate",
          subTitle: "Real-estate agency",
          date: "2022",
          description: "<p>Created a secure and efficient API to define different categories of listings with dynamic attributes. Defining local professionals with limited access based on categories and geographical regions.</p>",
        },
      ],
    },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
