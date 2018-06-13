export default class Post {

    constructor(userId = 1, id = 1, title = '', body = ''){
        
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}