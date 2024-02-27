import { Color } from "@webComponents"

interface TypeProps{ 
    id: string, 
    name:string 
    isActive: boolean
    updatedAt: Date
    createdAt: Date
}

export class AnimeType{

    public id: string
    public name: string
    public color: Color
    public isActive: boolean
    public updatedAt: Date
    public createdAt: Date

    constructor({ id, name, createdAt, isActive, updatedAt }: TypeProps){
        this.id = id
        this.name = name
        this.color = AnimeType.colorMapping[id] || 'cyan';
        this.isActive =  isActive        
        this.updatedAt = updatedAt        
        this.createdAt = createdAt
        
    }

    private static colorMapping: Record<string, Color> = {
        '8c12a177-94ca-4340-a0ae-66d67ac0e13d': 'orange',
        'affc8acc-f80a-4718-9d5d-d1eb6455f5e1': 'red',
        'fe322648-c108-4656-b540-4794c96fbf68': 'purple',
      };
}