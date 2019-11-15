import sellvy from '../assets/sellvy.png'
import sellvy2 from '../assets/sellvy2.png'
import sellvy3 from '../assets/sellvy3.png'
import sellvy4 from '../assets/sellvy4.png'
import sellvy5 from '../assets/sellvy5.png'
import shuttlers from '../assets/shuttlers.png'
import shuttlers1 from '../assets/shuttlers1.png'
import tantasecure from '../assets/tantasecure.png'
import tantasecure1 from '../assets/tantasecure1.png'
import tantasecure2 from '../assets/tantasecure2.png'
import tantasecure3 from '../assets/tantasecure3.png'
import tantasecure4 from '../assets/tantasecure4.png'


export interface ProjectData {
   title: string;
   identifier: string;
   date: string;
   description: string;
   images: Array<string>;
   stack: Array<string>;
 }

 interface Projects{
    [key: string]: ProjectData;
 }

class Project {
   private projects: Projects
   constructor() {
      this.projects =  {
         sellvy: {
           title: 'Sellvy',
           identifier: 'sellvy',
           date: 'June, 2019',
           description:
             'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
           images: [
             sellvy,
             sellvy2,
             sellvy3,
             sellvy4,
             sellvy5
           ],
           stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
         },
         shuttlers: {
           title: 'Shuttlers',
           identifier: 'shuttlers',
           date: 'May 2017',
           description:
             'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
           images: [shuttlers, shuttlers1],
           stack: ['React', 'Typescript', 'Express JS', 'Node JS', 'Mongo DB'],
         },
         'tanta-secure': {
         title: 'Tanta Secure',
         identifier: 'tanta-secure',
         date: 'April 2018',
         description:
           'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
         images: [tantasecure, tantasecure1, tantasecure2, tantasecure3, tantasecure4],
         stack: ['Javascript', 'Html', 'CSS', 'Bootstrap'],
       },
         neoconnect: {
           title: 'Neoconnect',
           identifier: 'neoconnect',
           date: 'December 2009',
           description:
             'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English',
           images: [],
           stack: ['React', 'Express JS', 'Node JS', 'Mongo DB'],
         },
       };
   }

   selectProject(selector: string) { 
      return this.projects[selector];
   }

   listProjects() {
     const projectList = Object.keys(this.projects).map(projectKey => this.projects[projectKey])
     return projectList;
   }
}

export default Project;