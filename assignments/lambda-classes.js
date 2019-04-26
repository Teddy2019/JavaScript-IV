
// CODE here for your Lambda Classes
class Person {
    constructor(perAttr) {
        this.name = perAttr.name;
        this.age = perAttr.age;
        this.location = perAttr.location;
        this.gender = perAttr.gender;
    }
    speak(){return `Hello my name is ${this.name} , I am from ${this.location}`};
}

class Instructor extends Person{
    constructor(insAttr) {
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject){return `Today we are learning about ${subject}!`};
    grade(student, subject){return `${student.name} receives a perfect score on ${subject}`};
}

class Student extends Person{
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects(){return this.favSubjects.forEach(element => {console.log(element) });};
    PRAssignment(subject){return `${this.name} has submitted a PR for ${subject}.`};
    sprintChallenge(subject){return  `${this.name} has begun sprint challenge on ${subject}`}
}

class ProjectManager extends Instructor{
    constructor(projAttr) {
        super(projAttr);
        this.gradClassName = projAttr.gradClassName;
        this.favInstructor = projAttr.favInstructor;
    }
    standUp(channel){return  `${this.name} announces to ${channel}, @channel standup times!​​​​​`};
    debugsCode(student, subject){return `${this.name} debugs ${student.name}'s code on ${subject}`};
}

/*#### Instructors*/
const mike = new Instructor({
    name: 'Mike',
    location: 'Fortmill',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  })

  const matt = new Instructor({
    name: 'Matt',
    location: 'Charlotte',
    age: 31,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `work Hard`
  })

  /*#### Student*/

  const teddy = new Student({
    name: 'Teddy',
    location: 'Charlotte',
    age: 28,
    gender: 'male',
    previousBackground: 'Physics',
    className: 'WEB18',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  })

  const anna = new Student({
    name: "Anna",
    age: 23,
    location : "Seattle",
    gender: 'female',
    previousBackground: "DBA",
    className: "WEPT6",
    favSubjects: ["js", "pyton", "SQL"]
})

/*#### Project Manager*/

const brandon = new ProjectManager({
    name: 'Brandon',
    location: 'DC',
    age: 26,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Any thing for tonight`,
    gradClassName: 'WEB14',
    favInstructor: 'Dan'
  })

  const caitlen = new ProjectManager({
    name: 'Caitlen',
    location: 'Sliver Spring',
    age: 26,
    gender: 'femail',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I will cover him for tonight`,
    gradClassName: 'WEB15',
    favInstructor: 'Jash'
  })

/********************/

console.log(mike.speak());
console.log(teddy.speak());
console.log(brandon.speak());
console.log(matt.demo('CSS'));
console.log(mike.grade(teddy, 'JavaScript'));
console.log(anna.listsSubjects());
console.log(teddy.PRAssignment('Advance CSS'));
console.log(anna.sprintChallenge('Javascript-fandamentals'));
console.log(brandon.demo('CSS'));
console.log(caitlen.grade(teddy, 'JavaScript'));
console.log(brandon.standUp('Slack'));
console.log(caitlen.debugsCode(anna, 'JavaScript'));


