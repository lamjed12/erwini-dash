import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { agriculteurService } from '../../../services/agriculteur.service';
import { agriculteur } from '../../../model/agriculteur';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-agriculteurs',
  templateUrl: './agriculteurs.component.html',
  styleUrls: ['./agriculteurs.component.css']
})
export class agriculteursComponent implements OnInit {
  public agriculteurs : agriculteur[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  constructor(private agriculteurService: agriculteurService,) { }

  ngOnInit(): void {
   this.getProduit();
  }


  public getProduit(): void {
    this.agriculteurService.getagriculteur().subscribe({
      next: (response: agriculteur[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.agriculteurs = response;
        
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
      button.setAttribute('data-target', '#updateMissionModal');

      
    }  
    
    
    
    container!.appendChild(button);
    button.click();
  }

public onAddMission(addForm: NgForm): void {
  console.log("addForm.valueaddForm.valueaddForm.value")
    console.log(addForm.value)
 //   document.getElementById('add-mission-form')!.click();
    const fd = new FormData();
    fd.append('nom',addForm.value.nom)
    fd.append('categorie',addForm.value.categorie)
    fd.append('description',addForm.value.description)
    fd.append('marque',addForm.value.marque)
    fd.append('quantite',addForm.value.quantite)
    fd.append('prix',addForm.value.prix)
    
  
    this.agriculteurService.addagriculteur(addForm.value).subscribe({
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
    console.log(editForm.value._id)
    
      
       this.agriculteurService.updateagriculteur(editForm.value).subscribe({
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
    this.agriculteurService.deleteagriculteur(id).subscribe({
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
