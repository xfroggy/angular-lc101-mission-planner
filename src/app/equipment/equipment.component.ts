import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearMax: boolean = false;
   remainingBudget: number = 2000;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment: object, weight: number){        
     this.cargoHold.push(equipment);
     this.cargoMass = this.cargoMass + weight;
     this.remainingBudget -= weight;
     if (this.cargoMass > (this.maximumAllowedMass-200) && this.cargoMass <=this.maximumAllowedMass){
       this.nearMax = true;
       return this.nearMax;
     }else return false;
   }

   checkItems(weight: number){
     if (this.cargoHold.length === this.maxItems){
      return true;
     }else {
       if ((this.cargoMass + weight)> this.maximumAllowedMass){
       return true;
      }  
     } 
      return false;
   }

   emptyHold(){
     this.nearMax = false;
     this.cargoHold = [];
     this.cargoMass = 0;
     this.remainingBudget = 2000;
     
   }


   
}
