import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { puitService } from '../../../services/puit.service';
import { puit } from '../../../model/puit';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Pompe } from 'src/app/model/pompe';
import { PompeService } from 'src/app/services/pompe.service';
import { AgendaService } from 'src/app/services/agenda.service';
import { Agenda } from 'src/app/model/agenda';
// import * as jQuery from 'jquery';
// import 'jqueryui';
// declare var $: any;


@Component({
  selector: 'app-moteurs',
  templateUrl: './moteurs.component.html',
  styleUrls: ['./moteurs.component.css']
})
 
export class moteursComponent implements OnInit {
  startDate = new Date();
  endDate = new Date();
  
  // dateToday(): Date {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = now.getMonth() + 1;
  //   const day = now.getDate();
  //   const hour = now.getHours();
  //   const minute = now.getMinutes();
  //   return new Date(year, month, day, hour, minute);
  // } 

  dateToday(): string {
    return new Date().toISOString().split('.')[0];
  }



  myForm = new FormGroup({
    date_debut: new FormControl('', Validators.required)
  });
  public puits : puit[] | undefined;
  public agendaPompes : Agenda[] | undefined;
  public agendaPuits : Agenda[] | undefined;
  public pompes : Pompe[] | undefined;
  deleteCommand: any;
  addProduct: any;
  editMission: any;
  puit: any;

  pompe: any;
  addPlanifierPompeForm: any;
  addPlanifierPuitForm: any;
  siwtchSecurity: boolean = false;
  toggleState = false;

  // date_debut: Date = new Date();
  // date_fin: Date;
  
  
  
  
  constructor(private puitService: puitService,private pompeService: PompeService,private agendaService: AgendaService,) {
    // this.date_debut = new Date();
    // this.date_fin = new Date();
   }

  
  

  ngOnInit(): void {
   this.getPuits();
   this.getPompes();
   this.getAgendsPuit();
   this.getAgendsPompe();
  }

  // min :any ="2023-03-28";

  // pastDateTime(){
  //   var tdate:any = new Date();
  //   var date:any = tdate.getDate();
  //     if(date < 10){
  //       date = "0" + date;
  //     }
  //     var month: any = tdate.getMonth() + 1;
  //     if(month < 10){
  //       month = "0" + month;
  //     }
  //     var year:any = tdate.getFullYear();
  //     var hours:any = tdate.getHours();
  //     var minutes:any = tdate.getMinutes();
  //     this.min = year + "-" + month + "-" + date + "T" + hours + ":" + minutes;
  // }

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
  

  public getAgendsPuit(): void {
    this.agendaService.getagendasByType("puit").subscribe({
      next: (response: Agenda[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.agendaPuits = response;
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public getAgendsPompe(): void {
    this.agendaService.getagendasByType("pompe").subscribe({
      next: (response: Agenda[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.agendaPompes = response;
        
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

    if( mode == 'addNewPuit'){
      this.puit = mission;

    }

    
    container!.appendChild(button);
    button.click();
  }



public onAddMission(addForm: NgForm): void {
  console.log("addForm.valueaddForm.valueaddForm.value")
    console.log(addForm.value)
  
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

    this.pompeService.addpompe(addForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getPompes();
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

      this.pompeService.updatepompe(editForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          this.getPompes();
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
    this.pompeService.deletepompe(id).subscribe({
      next: (response: any) => {
        console.log(response);

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        this.getPompes();
        console.log('complete');
        }
    });
    

  }
 

// public addNewAppointment(addPlanifierPompeForm: NgForm){
//   console.log(addPlanifierPompeForm.value)
// }

public addNewAppointmenPuit(addPlanifierPuitForm: NgForm){
  console.log(addPlanifierPuitForm.value)
  console.log(this.puit._id)

  this.agendaService.addAgenda({
    'date_debut': addPlanifierPuitForm.value.date_debut,
    'date_fin': addPlanifierPuitForm.value.date_fin,
    'puit': this.puit._id,
    'type': 'puit'


  }).subscribe({
    next: (response: any) => {
      console.log(response);
      this.getAgendsPuit();
      addPlanifierPuitForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addPlanifierPuitForm.reset();
    },
    complete: () => {
      console.log('complete');

    }
  });
}

public deleteAppointmentPuit(id: any){
  console.log('id',id);
    this.agendaService.deleteAgenda(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getAgendsPuit();

        
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


public onOpenModal2(mission:any, mode: string): void {

    
  const container = document.getElementById('main-container') ;
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
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
    button.setAttribute('data-target', '#updatePompeMissionModal');

    
  }  


  if( mode == 'addNewPompe'){
    this.pompe = mission;

  }
  
  
  container!.appendChild(button);
  button.click();
}



public onAddPompeMission(addForm: NgForm): void {
console.log("addForm.valueaddForm.valueaddForm.value")
  console.log(addForm.value)


  this.pompeService.addpompe(addForm.value).subscribe({
    next: (response: any) => {
      console.log(response);
      this.getPompes();
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

public onUpdatePompe(editForm: NgForm) : void{

  console.log("editForm.value._ideditForm.value._ideditForm.value._id")
  console.log(editForm.value._id)

    this.pompeService.updatepompe(editForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getPompes();
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

onDeletePompeMission(id : any){
  console.log('id',id);

  this.pompeService.deletepompe(id).subscribe({
    next: (response: any) => {
      console.log(response);

      
      },
    error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    complete: () => {
      this.getPompes();
      console.log('complete');
      }
  });
  

}

public addNewAppointmenPompe(addPlanifierPompeForm: NgForm){
  console.log(addPlanifierPompeForm.value)
  console.log(this.pompe._id)

  this.agendaService.addAgenda({
    'date_debut': addPlanifierPompeForm.value.date_debut,
    'date_fin': addPlanifierPompeForm.value.date_fin,
    'pompe': this.pompe._id,
    'type': 'pompe'
  }).subscribe({
    next: (response: any) => {
      console.log(response);
      this.getAgendsPompe();
      addPlanifierPompeForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addPlanifierPompeForm.reset();
    },
    complete: () => {
      console.log('complete');

    }
  });
}

public deleteAppointmentPompe(id: any){
  console.log('id',id);
    this.agendaService.deleteAgenda(id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getAgendsPompe();

        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        this.getPompes();
        console.log('complete');
        }
    });
}


}
