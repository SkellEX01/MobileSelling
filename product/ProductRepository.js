const Product = require('./Product');

class ProductRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let products = await this.knex('Type_product').join('Product', 'Type_product.id', '=', 'Product.id_type');
        return products.map(product => this.factory(product));
    }

    async findProductById(id) 
    {
        let product = await this.knex.select('*').from('Product').where('id', id);
        return product.length ? this.factory(product[0]) : null;
    }

    async findProductGroupBy(groupById)
    {
        let groupProduct = await this.knex.select('*').from('Product').whereIn('id', groupById);
        return groupProduct.map(allProduct => this.factory(allProduct));
    }

    async findProductByName(name) 
    {
        let products = await this.knex.select('*').from('Product').where('name', 'like', '%'+name+'%');
        return products.map(product => this.factory(product));

    }

    async findPriceProductGroupBy(groupById) 
    {
        let groupPrice = await this.knex.from('Product').whereIn('id', groupById);
        return groupPrice.map(allProduct => this.factory(allProduct));
    }

    async findProductByIdType(id) 
    {
        let products = await this.knex.select('*').from('Product').where('id_type', id);
        return products.map(product => this.factory(product));

    }

    async add(data) 
    {
        return await this.knex('Product').insert(data);
    }

    async update(data, id) 
    {
        return await this.knex('Product').where('id', id).update(data);
    }

    async delete(id) 
    {
        return await this.knex('Product').where('id', id).del();
    }
    
    factory(product)
    {
        return new Product(product);
    }
    
}

module.exports = ProductRepository;
