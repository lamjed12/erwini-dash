import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { puitService } from '../../../services/puit.service';
import { puit } from '../../../model/puit';
import { NgForm } from '@angular/forms';
import { Pompe } from 'src/app/model/pompe';
import { PompeService } from 'src/app/services/moteur.service';



@Component({
  selector: 'app-moteurs',
  templateUrl: './moteurs.component.html',
  styleUrls: ['./moteurs.component.css']
})
 
export class moteursComponent implements OnInit {
  public puits : puit[] | undefined;
  

  public pompes : Pompe[] | undefined;
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  siwtchSecurity: boolean = false;
  toggleState = false;
  
  constructor(private puitService: puitService,private pompeService: PompeService,) { }

  
  

    ngOnInit(): void {
   this.getPuits();
   this.getPompes();
  }

  public getPuits(): void {
    this.puitService.getpuit().subscribe({
      next: (response: puit[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.puits = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }
  

  public getPompes(): void {
    this.pompeService.getpompes().subscribe({
      next: (response: Pompe[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.pompes = response;
        
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
    
  
    this.puitService.addpuit(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getPuits();
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
    
      
       this.puitService.updatepuit(editForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getPuits();
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
    this.puitService.deletepuit(id).subscribe({
      next: (response: any) => {
        console.log(response);

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        this.getPuits();
        console.log('complete');
        }
    });

    

  }
 


}
