import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokeApiService } from 'src/app/common/services/poke-api.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  providers: [PokeApiService],
})
export class SearcherComponent implements OnInit {
  public form!: FormGroup;

  @Output() clickSearch: EventEmitter<string>;
  @Output() keyUp: EventEmitter<string>;
  @Output() backSpace: EventEmitter<string>;
  constructor(private fb: FormBuilder) {
    this.clickSearch= new EventEmitter();
    this.backSpace= new EventEmitter();
    this.keyUp= new EventEmitter();
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
  
  public onClickSearch(){
    if (this.form.valid) {
      this.clickSearch.emit(this.form.value.name);
    }
  }
  public onBackSpace(){
    if (this.form.valid) {
      this.clickSearch.emit(this.form.value.name);
    }
  }
  public onkeyUp(){
    if (this.form.valid) {
      this.keyUp.emit(this.form.value.name);
    }
  }
}
