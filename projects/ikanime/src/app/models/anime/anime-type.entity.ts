import { Color } from "@webComponents"

interface TypeProps{ 
    id: string, 
    value:string 
}

export class AnimeType{

    public id: string
    public value: string
    public color: Color

    private static colorMapping: Record<string, Color> = {
        '8c12a177-94ca-4340-a0ae-66d67ac0e13d': 'orange',
        'affc8acc-f80a-4718-9d5d-d1eb6455f5e1': 'red',
        'fe322648-c108-4656-b540-4794c96fbf68': 'purple',
      };

    constructor({ id,value }: TypeProps){
        this.id = id
        this.value = value
        this.color = AnimeType.colorMapping[id] || 'cyan';
        
    }

}