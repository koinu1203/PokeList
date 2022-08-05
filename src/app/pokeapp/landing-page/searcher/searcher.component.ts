import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  public form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(){
    this.form=this.fb.group({
      name: [null,Validators.required]
    })
  }
  public onSearch(){
    if(this.form.valid){
      // TODO: integrar con servicio
      console.log(this.form.value);
    }
  }
}
