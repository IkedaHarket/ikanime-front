import { CategoryFindResponse } from "../../interfaces/api";
import { AnimeCategory } from "../../models/anime";


export function convertToCategory(animeResponse: CategoryFindResponse[]): AnimeCategory[]{
    return animeResponse.map( (category) => new AnimeCategory ({
        id: category.id,
        name: category.name,
        isActive: !!category.isActive,
        updatedAt: category.updatedAt,
        createdAt: category.createdAt,
    })) 
  }