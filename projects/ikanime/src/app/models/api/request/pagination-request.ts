export class PaginationRequest{

    constructor(
        public page?: number,
        public limit?: number,
        ){}
        
    createUrlParams( ): URLSearchParams{

        const urlParams = new URLSearchParams();
        if(this.page){
            urlParams.append('page', this.page.toString());
        }
        if(this.limit){
            urlParams.append('limit', this.limit.toString());
        }
        return urlParams
    }
}