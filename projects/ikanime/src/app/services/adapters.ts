import { PaginationResponse } from "../interfaces/api"
import { Pagination } from "../models"


export function convertToPagination<T>(paginationResponse: PaginationResponse<T>): Pagination<T>{
    return new Pagination<T>({
        limit: paginationResponse.limit,
        next: paginationResponse.next,
        page: paginationResponse.page,
        prev: paginationResponse.prev,
        records: paginationResponse.records,
        total: paginationResponse.total,
    })
}