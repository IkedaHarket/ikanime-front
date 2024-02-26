import { AnimeFindResponse } from "../../interfaces/api";
import { AnimeCategory } from "../../models/anime";
import { AnimeType } from "../../models/anime/anime-type.entity";
import { Anime } from "../../models/anime/anime.entity";


export function convertToAnime(animeResponse: AnimeFindResponse[]): Anime[]{
    return animeResponse.map( (anime) => new Anime ({
        id: anime.id,
        name: anime.name,
        description: anime.description,
        uniqueName: anime.uniqueName,
        otherNames: anime.otherNames,
        state: anime.state,
        type: new AnimeType({ id: anime.type.id, value: anime.type.value }),
        image: anime.image,
        position: anime.position,
        categories: anime.categories,
        nextEpisode: anime.nextEpisode,
        releaseDate: anime.releaseDate,
        isActive: anime.isActive,
        updatedAt: anime.updatedAt,
        createdAt: anime.createdAt,
    })) 
  }