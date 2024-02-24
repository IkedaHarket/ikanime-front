export interface PaginationProps<T>{
    page: number
    limit: number
    total: number
    next: string | null
    prev: string | null
    records: T
}

export class Pagination<T>{
    public page: number
    public limit: number
    public total: number
    public next: string | null
    public prev: string | null
    public records: T

    constructor({
        page,
        limit ,
        total ,
        next ,
        prev ,
        records ,
    }:PaginationProps<T>){
        this.page = page
        this.limit    = limit
        this.total    = total
        this.next     = next
        this.prev     = prev
        this.records  = records
    }

}