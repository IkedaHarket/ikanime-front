import { StateFindResponse } from "../../interfaces/api";
import { AnimeType } from "../../models/anime";


export function convertToAnimeType(typeResponse: StateFindResponse[]): AnimeType[]{
    return typeResponse.map( (type) => new AnimeType({
        id: type.id,
        name: type.name,
        isActive: !!type.isActive,
        updatedAt: type.updatedAt,
        createdAt: type.createdAt,
    })) 
  }