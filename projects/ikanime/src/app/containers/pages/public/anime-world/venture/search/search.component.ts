import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as WebComponents from '@webComponents';
import { DataWithStatus } from 'projects/ikanime/src/app/interfaces';
import { Pagination } from 'projects/ikanime/src/app/models';
import { AnimeCategory, AnimeState, AnimeType } from 'projects/ikanime/src/app/models/anime';
import * as Service from 'projects/ikanime/src/app/services';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type FormFieldName = 'categories' | 'states' | 'types'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule, 
    WebComponents.CaptionComponent, 
    WebComponents.MultiselectComponent,
    WebComponents.BasicOptionComponent,
    WebComponents.ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  private _animeService = inject(Service.AnimeService)
  private _categoryService = inject(Service.AnimeCategoryService)
  private _stateService = inject(Service.AnimeStateService)
  private _typeService = inject(Service.AnimeTypeService)
  private _fb = inject(FormBuilder)

  public categories !: Signal<DataWithStatus<Pagination<AnimeCategory[]>>>
  public states !: Signal<DataWithStatus<Pagination<AnimeState[]>>>
  public types !: Signal<DataWithStatus<Pagination<AnimeType[]>>>

  public form = this._fb.group({
    categories: this._fb.group({}),
    states: this._fb.group({}),
    types: this._fb.group({}),
  })

  ngOnInit(): void {
    this.categories = this._categoryService.categories
    this.states = this._stateService.states
    this.types = this._typeService.types
    this.initForm()
  }

  findFormGroup(fieldName:FormFieldName, value : string) : FormControl{
    return this.form.get(fieldName)!.get(value) as FormControl
  }


  initForm(){
    this.categories().item?.records.map(category => {
      (this.form.get('categories') as FormGroup).addControl(category.id, new FormControl())
    })
    this.states().item?.records.map(state => {
      (this.form.get('states') as FormGroup).addControl(state.id, new FormControl())
    })
    this.types().item?.records.map(type => {
      (this.form.get('types') as FormGroup).addControl(type.id, new FormControl())
    })
  }

  
  search(){
    // if(this.form.invalid) return
    
    this._animeService.find({
      body:{
        states: this.formatFormProperty('states'),
        types: this.formatFormProperty('types'),
        categories:{
          mode: 'some',
          in: this.formatFormProperty('categories')
        }
      }
    }).subscribe(console.log)
  }
  private formatFormProperty(field: FormFieldName){
    return Object.entries(this.form.get(field)!.value).filter(([_,value]) => value).map(([id,_])=> id)
  }
}
