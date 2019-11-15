import { ExperienceDetailsTypes} from '../components/ExperienceDetails/ExperienceDetails';

class Education {
   private education: Array<ExperienceDetailsTypes> 
   constructor() {
      this.education = [
         {
           titleRole: 'Higher National Diploma - Computer Engineering',
           location: 'Yaba College of Technology',
           duration: '2016 - 2018',
           details:
             'Graduated with an upper credit and heavily involved in practicals and project leadership.',
         },
          {
           titleRole: 'National Diploma - Computer Engineering',
           location: 'Yaba College of Technology',
           duration: ' 2013 - 2015',
           details:
             'Worked on a phone detector project used to detect mobile devices using radio frequencies',
         },
      ];
   }

   educationList() {
      return this.education
   }
}

export default Education;

