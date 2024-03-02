import { Component, EventEmitter, Input, Output, Signal, computed } from '@angular/core';
import { RightArrowComponent } from './right-arrow/right-arrow.component';
import { LeftArrowComponent } from './left-arrow/left-arrow.component';

export interface Pagination{
  page: number
  limit: number
  total: number
}

@Component({
  selector: 'web-paginator',
  standalone: true,
  imports: [ RightArrowComponent, LeftArrowComponent ],
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {

  @Input({ required: true }) pagination !: Signal<Pagination>;
  @Input() currentPage : number = 1
  @Output() onChangePage = new EventEmitter<number>();
  
  totalPages = computed(() => Math.ceil(this.pagination().total / this.pagination().limit))

  setPage(page:number){
    this.currentPage = page
    this.onChangePage.emit(this.currentPage)
  }

}
