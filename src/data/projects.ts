import sellvy from '../assets/sellvy.png'
import sellvy2 from '../assets/sellvy2.png'
import sellvy3 from '../assets/sellvy3.png'
import sellvy4 from '../assets/sellvy4.png'
import sellvy5 from '../assets/sellvy5.png'
import shuttlers from '../assets/shuttlers.png'
import shuttlers1 from '../assets/shuttlers1.png'
import shuttlers2 from '../assets/shuttlers2.png'
import shuttlers3 from '../assets/shuttlers3.png'
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
           date: 'September, 2018',
           description:
             'Sellvy is a social E-commerce application that provides means for users to earn money by sharing(right from the platform) products and services to their friends and family on their favorite social platforms right and also for merchants to place their products or services and be rest assured that they will cover a high market range.',
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
           date: 'September 2017',
           description:
             `Shuttlers is a transport service that provides an easy way for the staff of an organization to easily commute to work and back home. Organizations or companies can easily set up the service for their staff members with adequate information for pick up and destination right on the shuttler\'s platform and every other thing is taken care of.
             Shuttlers has a tracking system setup for drivers to easily locate staff pickups and destinations, and also provides analytics to organization so they can see how much and manner the services is been used.`,
           images: [shuttlers, shuttlers1, shuttlers2, shuttlers3],
           stack: ['React', 'KOA', 'Node JS', 'Postgres', 'RabbitMQ'],
         },
         'tanta-secure': {
         title: 'Tanta Secure',
         identifier: 'tanta-secure',
         date: 'April 2018',
         description:
           'Tanta Secure is one of the many product from Tanta innovative, the product provides services for people to insure their phones and gadgets from damages and theft, the platforms provide a means for its users to log claims and report thefts easily, and also provide a seamless payment system for users to pay for their monthly subscriptions for the service.',
         images: [tantasecure, tantasecure1, tantasecure2, tantasecure3, tantasecure4],
         stack: ['Javascript', 'Html', 'CSS', 'Bootstrap', 'PHP'],
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