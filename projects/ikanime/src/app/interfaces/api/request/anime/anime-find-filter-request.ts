export interface AnimeFindFilterRequest{
    logic: 'AND' | 'OR',
    orderBy: { createdAt: 'desc' | 'asc' },
    name?: { contains?: string },
}