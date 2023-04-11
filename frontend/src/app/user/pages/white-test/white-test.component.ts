import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WhiteTestService } from '../../../services/historique.service';
import { white_test } from '../../../model/historique';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-white-test',
  templateUrl: './white-test.component.html',
  styleUrls: ['./white-test.component.css']
})
export class WhiteTestComponent implements OnInit {
  public white_tests : white_test[] | undefined
  deleteCommand: any;
  addProduct: any;
  editMission: any;

  constructor(private WhiteTestService: WhiteTestService,) { }
  ngOnInit(): void {
    this.getProduit();
  }

  public getProduit(): void {
    this.WhiteTestService.getwhite_test().subscribe({
      next: (response: white_test[]) => {
        console.log(response);
        console.log("responseresponseresponseresponseresponseresponse");
        this.white_tests = response;
        
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
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
      
    
      this.WhiteTestService.addwhite_test(addForm.value).subscribe({
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


}
