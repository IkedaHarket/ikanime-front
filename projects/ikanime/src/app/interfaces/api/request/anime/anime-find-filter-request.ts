export interface AnimeFindFilterRequest{
    categories?: { mode: 'every' | 'some' | 'none', in: string[] },
    logic?: 'AND' | 'OR',
    name?: { contains?: string },
    uniqueName?: { contains?: string },
    orderBy?: { createdAt: 'desc' | 'asc' },
    states?: string[],
    types?: string[],
}