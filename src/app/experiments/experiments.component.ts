import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: object[] = [
    {name: 'Mars soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'}
  ];

  experimentBeingEdited: object = null;
  
  constructor() { }

  ngOnInit() {
  }

  addExperiment(name: string){
    this.experiments.push({name: name});
  }

  editExperiment(experiment: object) {
    this.experimentBeingEdited = experiment;
  }

  saveExperiment(name: string, experiment: object){   
    experiment['name'] = name;        
    this.experimentBeingEdited = null;            
  }

  removeExperiment(experiment: object){
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1);
  }

}
