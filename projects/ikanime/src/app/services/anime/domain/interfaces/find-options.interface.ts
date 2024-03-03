import { AnimeFindFilterRequest } from "projects/ikanime/src/app/interfaces/api"

export interface FindOptions{
    queries?: {
      page: number,
      limit: number
    },
    body ?: AnimeFindFilterRequest
  }