const BillDetail = require('./BillDetail');

class BillDetailRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let billDetails = await this.knex.select('*').from('Bills_detail');
        return billDetails.map(billDetail => this.factory(billDetail));
    }

    factory(billDetail) 
    {
        return new BillDetail(billDetail);
    }
}

module.exports = BillDetailRepository;
