const Category = require('./Category');

class CategoryRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }
    
    async getAll() 
    {
        let categories = await this.knex.select('*').from('Type_product');
        return categories.map(category => this.factory(category)); 
    }

    async findCategoryById(id) 
    {
        let rawCategory = await this.knex.select('*').from('Type_product').where('id', id);

        if(rawCategory.length) {
            return this.factory(rawCategory[0]);
        } 

        return null;
    }

    async add(data) 
    {
        let addCategory = await this.knex('Type_product').insert(data);
        return addCategory;
    }

    async update(data, id) 
    {
        let updateCategory = await this.knex('Type_product').where('id', id).update(data);
        return updateCategory;
    }

    async delete(id) 
    {
        let deleteCategory = await this.knex('Type_product').where('id', id).del();
        return deleteCategory;
    }

    factory(category) 
    {
        return new Category(category);
    }
}

module.exports = CategoryRepository;
