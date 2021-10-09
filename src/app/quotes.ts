export class Quotes {
    constructor(
        public author: string,
        public title: string,
        public quote: string,
        public upvote:number,  
        public downvote:number,
        public submitedBy: string,
         ){}
}