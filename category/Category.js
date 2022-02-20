class Category 
{ 
    constructor(category) 
    {
        this.id          = category.id;
        this.name        = category.name;
        this.description = category.description;
        this.status      = category.status;
    }
}

module.exports = Category;
