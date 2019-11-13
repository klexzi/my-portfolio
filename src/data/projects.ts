export interface ProjectData {
   title: string;
   date: string;
   description: string;
   images: Array<string>;
   stack: Array<string>;
 }

 interface Projects{
    [key: string]: ProjectData;
 }

const data = {
   sellvy: {
     title: 'Sellvy',
     date: 'June, 2019',
     description:
       'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
     images: [
       'https://images.unsplash.com/photo-1566852766232-66a16bdc0328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       'https://images.unsplash.com/photo-1566844832853-5b3e5e06510a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
     ],
     stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
   },
   insyt: {
     title: 'Insyt',
     date: 'May 2017',
     description:
       'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
     images: ['', '', ''],
     stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
   },
   neoconnect: {
     title: 'Neoconnect',
     date: 'December 2009',
     description:
       'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
     images: ['', '', ''],
     stack: ['React', 'Express JS', 'Node JS', 'Mongo DB'],
   },
 };

class Project {
   private projects: Projects
   constructor() {
      this.projects = data
   }

   selectProject(selector: string) { 
      return this.projects[selector];
   }
}

export default Project;