import { ExperienceDetailsTypes} from '../components/ExperienceDetails/ExperienceDetails';

class Experience {
   private experience: Array<ExperienceDetailsTypes> 
   constructor() {
      this.experience = [
         {
           titleRole: 'Software Engineer',
           location: 'Andela',
           duration: '2019 - Present',
           details:
             'Mentoring Engineers, Creating Architectures, Debugging, Developing Softwares, and Leading teams.'
         },
          {
           titleRole: 'Software Engineer',
           location: 'Sellvy',
           duration: '2018 - 2019',
           details:
             'Working on Data stores, Data representation, APIs, User interfaces, Debugging, and Optimizations'
            },
            {
               titleRole: 'Team Lead / Software Engineer',
               location: 'Tanta Innovative',
               duration: '2017 - 2018',
               details: 'Leading teams on projects, APIs, Creating Architectures, Mentorship, testing, trainings, Developing various applications, Developing in house tools.'
            },
            {
               titleRole: 'Software Engineer',
               location: 'Five Live',
               duration: '2016 - 2017',
               details: 'Managing Databases, creating user interfaces, creating backend services and APIs'
            },
            {
               titleRole: 'Software / Hardware Engineer',
               location: 'Systemtech',
               duration: '2013 - 2014',
               details: 'Maintaining softwares, Developing plugins, creating user interfaces, and Testing'
            }
      ];
   }

   experienceList() {
      return this.experience
   }
}

export default Experience;

