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
        let rawPromotion = await this.knex.select('*').from('Promotion').where('id', id);

        if(rawPromotion.length) {
            return this.factory(rawPromotion[0]);
        }

        return null;
    }

    async add(data) 
    {
        let addPromotion = await this.knex('Promotion').insert(data);
        return addPromotion;
    }

    async update(data, id) 
    {
        let updatePromotion = await this.knex('Promotion').where('id', id).update(data);
        return updatePromotion;
    }

    async delete(id) 
    {
        let deletePromotion = await this.knex('Promotion').where('id', id).del();
        return deletePromotion;
    }

    factory(promotion) 
    {
        return new Promotion(promotion);
    }
}

module.exports = PromotionRepository;
