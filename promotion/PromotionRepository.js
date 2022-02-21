const Promotion = require('./Promotion');

class PromotionRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let promotions = await this.knex.select('*').from('Promotion');
        return promotions.map(promotion => this.factory(promotion));
    }

    async findPromotionById(id) 
    {
        let promotion = await this.knex.select('*').from('Promotion').where('id', id);
        return promotion.length ? this.factory(promotion[0]) : null;
    }

    async add(data) 
    {
        return await this.knex('Promotion').insert(data);
    }

    async update(data, id) 
    {
        return await this.knex('Promotion').where('id', id).update(data);
    }

    async delete(id) 
    {
        return await this.knex('Promotion').where('id', id).del();
    }

    factory(promotion) 
    {
        return new Promotion(promotion);
    }
}

module.exports = PromotionRepository;
