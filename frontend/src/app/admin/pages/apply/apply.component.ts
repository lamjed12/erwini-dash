import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PasseCertifService } from './../../../services/passe-certif.service';
import { passeCertif } from './../../../model/passeCertif';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  public passeCertifs : passeCertif[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;

  constructor(private PasseCertifService: PasseCertifService,)  { }

  ngOnInit(): void {
    this.getProduit();
  }


  
  public getProduit(): void {
    this.PasseCertifService.getpasseCertif().subscribe({
      next: (response: passeCertif[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.passeCertifs = response;
        
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


  
    this.PasseCertifService.addpasseCertif(addForm.value).subscribe({
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
    
      
       this.PasseCertifService.updatepasseCertif(editForm.value).subscribe({
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
    this.PasseCertifService.deletepasseCertif(id).subscribe({
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
