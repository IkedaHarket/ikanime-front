import { AnimeResponse } from "../../interfaces/api";
import { Anime } from "../../models/anime/anime.entity";


export function convertToAnime(animeResponse: AnimeResponse[]): Anime[]{
    return animeResponse.map( (anime) => ({
        id: anime.id,
        name: anime.name,
        description: anime.description,
        uniqueName: anime.uniqueName,
        otherNames: anime.otherNames,
        state: anime.state,
        type: anime.type,
        image: anime.image,
        position: anime.position,
        categories: anime.categories,
        nextEpisode: anime.nextEpisode,
        releaseDate: anime.releaseDate,
        isActive: anime.isActive,
        updatedAt: anime.updatedAt,
        createdAt: anime.createdAt,
    }) as Anime) 
  }