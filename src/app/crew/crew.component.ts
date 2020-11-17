import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crewFull: boolean = false;
  crew: object[] = [];
  chosenCandidate: object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', currentCrew: false},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg',  currentCrew: false},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg',  currentCrew: false},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg',  currentCrew: false},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg',  currentCrew: false},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg',  currentCrew: false},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg',  currentCrew: false}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object){
    candidate['currentCrew'] = false;
    let candidateIndex = this.crew.indexOf(candidate);
    if (candidateIndex >=0){
      this.crew.splice(candidateIndex, 1);
      this.crewFull = false;      
      
    }else if (this.crew.length<3){
      candidate['currentCrew'] = true;
      this.crew.push(candidate);
      if (this.crew.length === 3){
        this.crewFull = true;
      }            
    }else this.crewFull = true;
  }

  chosen(candidate: object){
    this.chosenCandidate = candidate;
  }

}
