import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { vanneService } from '../../../services/vanne.service';
import { vanne } from '../../../model/vanne';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-vannes',
  templateUrl: './vannes.component.html',
  styleUrls: ['./vannes.component.css']
})


 
export class vannesComponent implements OnInit {
  public vannes : vanne[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;

    mesure: {
      tem_sol: number;
      humidity: number;
    } | undefined;
    // other properties related to the vanne object
  
  // temperatureValue: number = 25;
  // humidityValue: number = 50;
  
  constructor(private vanneService: vanneService,) { }
  public isinputshown : boolean = false;
  
  public hideinput(): void{
    this.isinputshown=false;   }

    ngOnInit(): void {
   this.getProduit();
  }
  

  updateSensorData() {

    mesure: {
      tem_sol: Number;
      // other properties related to mesures
    };
  //   // Call API to retrieve sensor values
  //   // ...
  //   // Once API returns data, update component properties
  //   this.temperatureValue = 30;
  //   this.humidityValue = 65;
  }

  public getProduit(): void {
    this.vanneService.getvanne().subscribe({
      next: (response: vanne[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.vannes = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }
  


  public onOpenModal1(mission:any, mode: string): void {

    
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
   /* if (mode === 'add') {
  
      button.setAttribute('data-target', '#addMissionModal');
      console.log(mission)
    }
*/
    if (mode === 'add') {
      console.log(mission)
      button.setAttribute('data-target', '#myModal');
     
    }
   
      
    if (mode === 'delete') {
      console.log("11111",mission)

      this.deleteCommand = mission;
      console.log("22222",this.deleteCommand._id)
      button.setAttribute('data-target', '#deleteCommand');

      
    }  

    if (mode === 'edit') {
      console.log(mission)

      this.editMission = mission;
      console.log("22222",this.deleteCommand._id)
      button.setAttribute('data-target', '#updateMissionModal');

      
    }  
    
    
    
    container!.appendChild(button);
    button.click();
  }

public onAddMission(addForm: NgForm): void {
  console.log("addForm.valueaddForm.valueaddForm.value")
    console.log(addForm.value)
 //   document.getElementById('add-mission-form')!.click();
    // const fd = new FormData();
    // fd.append('nom',addForm.value.nom)
    // fd.append('categorie',addForm.value.categorie)
    // fd.append('description',addForm.value.description)
    // fd.append('marque',addForm.value.marque)
    // fd.append('quantite',addForm.value.quantite)
    // fd.append('prix',addForm.value.prix)
    
  
    this.vanneService.addvanne(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getProduit();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');

      }
    });
  } 

  

  public onUpdateProduit(editForm: NgForm) : void{

    console.log("editForm.value._ideditForm.value._ideditForm.value._id")
    console.log(editForm.value._id)
    
      
       this.vanneService.updatevanne(editForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getProduit();
          editForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          editForm.reset();
        },
        complete: () => {
          console.log('complete');
        }
      });
  }

  onDeleteMission(id : any){
    console.log('id',id);
    this.vanneService.deletevanne(id).subscribe({
      next: (response: any) => {
        console.log(response);

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        this.getProduit();
        console.log('complete');
        }
    });

    

  }
 


}