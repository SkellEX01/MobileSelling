const Bill = require('./Bill');

class BillRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let bills = await this.knex.select('*').from('Bills');
        return bills.map(bill => this.factory(bill));
    }

    async getIdBill() 
    {
        let id = await this.knex.select('id').from('Bills').orderBy('id', 'desc');
        return id.length ? this.factoryCustomer(id[0]) : null;
    }

    async add(bill) 
    {
        return await this.knex('Bills').insert(bill);
    }

    factory(bill) 
    {
        return new Bill(bill);
    }
    
}

module.exports = BillRepository;
