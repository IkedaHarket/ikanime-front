import { StateFindResponse } from "../../interfaces/api";
import { AnimeState } from "../../models/anime";


export function convertToState(stateResponse: StateFindResponse[]): AnimeState[]{
    return stateResponse.map( (state) => new AnimeState ({
        id: state.id,
        name: state.name,
        isActive: !!state.isActive,
        updatedAt: state.updatedAt,
        createdAt: state.createdAt,
    })) 
  }