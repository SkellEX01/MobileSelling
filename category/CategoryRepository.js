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
        let category = await this.knex.select('*').from('Type_product').where('id', id);
        return category.length ? this.factory(category[0]) : null;
    }

    async add(data) 
    {
        return await this.knex('Type_product').insert(data);
    }

    async update(data, id) 
    {
        return await this.knex('Type_product').where('id', id).update(data);
    }

    async delete(id) 
    {
        return await this.knex('Type_product').where('id', id).del();
    }

    factory(category) 
    {
        return new Category(category);
    }
}

module.exports = CategoryRepository;
