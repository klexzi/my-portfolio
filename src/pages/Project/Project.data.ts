export interface ProjectData {
  title: string;
  date: string;
  description: string;
  images: Array<string>;
  stack: Array<string>;
}
const data = {
  sellvy: {
    title: 'Sellvy',
    date: 'June, 2019',
    description: `
      Sellvy is a social E-commerce application that provides means for users to earn money by sharing(right from the platform) products and services to their friends and family on their favorite social platforms right and also for merchants to place their products or services and be rest assured that they will cover a high market range.
      `,
    images: [
      'https://images.unsplash.com/photo-1566852766232-66a16bdc0328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1566844832853-5b3e5e06510a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
    stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
  },
  insyt: {
    title: 'Insyt',
    description:
      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
    images: ['', '', ''],
    stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
  },
  neoconnect: {
    title: 'Neoconnect',
    description:
      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
    images: ['', '', ''],
    stack: ['React', 'Express JS', 'Node JS', 'Mongo DB'],
  },
};

export default data;
