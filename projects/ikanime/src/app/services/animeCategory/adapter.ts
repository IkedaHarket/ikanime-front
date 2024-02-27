import { CategoryFindResponse } from "../../interfaces/api";
import { AnimeCategory } from "../../models/anime";


export function convertToCategory(categoryResponse: CategoryFindResponse[]): AnimeCategory[]{
    return categoryResponse.map( (category) => new AnimeCategory ({
        id: category.id,
        name: category.name,
        isActive: !!category.isActive,
        updatedAt: category.updatedAt,
        createdAt: category.createdAt,
    })) 
  }