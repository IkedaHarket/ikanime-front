interface State{ id: string, value:string }
interface Type{ id: string, value:string }
interface OtherNames{ id: string, value:string }
interface Category{ id: string, value:string }

export interface AnimeFindResponse{
    id:string
    name: string,
    description: string,
    uniqueName: string,
    otherNames: OtherNames[],
    state: State,
    type: Type,
    image: string,
    position: number,
    categories: Category[],
    nextEpisode : Date | null,
    releaseDate : Date | null,
    isActive ?: boolean,
    updatedAt: Date
    createdAt: Date
}