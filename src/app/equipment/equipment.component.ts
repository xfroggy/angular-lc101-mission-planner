import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {item: 'Habitat dome'},
    {item: 'Drones'}, 
    {item: 'Food containers'},
    {item: 'Oxygen tanks'}
    
  ];

  unitBeingEdited: object = null;
  
  constructor() { }

  ngOnInit() {
  }

  addUnit(name: string){
    this.equipment.push({item: name});
  }

  editUnit(unit: object) {
    this.unitBeingEdited = unit;
  }

  saveUnit(item: string, unit: object){   
      unit['item'] = item;        
      this.unitBeingEdited = null;            
  }

  removeUnit(unit: object){
    let index = this.equipment.indexOf(unit);
    this.equipment.splice(index,1);
  }

}
