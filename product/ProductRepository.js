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
        let rawProduct = await this.knex.select('*').from('Product').where('id', id);
        
        if(rawProduct.length) {
            return this.factory(rawProduct[0]);
        } 

        return null;

    }

    async findProductGroupBy(groupById)
    {
        let groupProduct = await this.knex.select('*').from('Product').whereIn('id', groupById);
        return groupProduct.map(allProduct => this.factory(allProduct));
    }

    async findProductByName(name) 
    {
        let rawProduct = await this.knex.select('*').from('Product').where('name', 'like', '%'+name+'%');
        return rawProduct.map(allProduct => this.factory(allProduct));

    }

    async findPriceProductGroupBy(groupById) 
    {
        let groupPrice = await this.knex.from('Product').whereIn('id', groupById);
        return groupPrice.map(allProduct => this.factory(allProduct));
    }

    async findProductByIdType(id) 
    {
        let rawProduct = await this.knex.select('*').from('Product').where('id_type', id);
        return rawProduct.map(allProduct => this.factory(allProduct));

    }

    async add(data) 
    {
        let addProduct = await this.knex('Product').insert(data);
        return addProduct;
    }

    async update(data, id) 
    {
        let updateProduct = await this.knex('Product').where('id', id).update(data);
        return updateProduct;
    }

    async delete(id) 
    {
        let deleteProduct = await this.knex('Product').where('id', id).del();
        return deleteProduct;
    }
    
    factory(product)
    {
        return new Product(product);
    }
    
}

module.exports = ProductRepository;
