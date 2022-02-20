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
        if(id.length) {
            return this.factoryCustomer(id[0]);
        }
    }

    async add(bill) 
    {
        let addBill = await this.knex('Bills').insert(bill);
        return addBill;
    }

    factory(bill) 
    {
        return new Bill(bill);
    }
    
}

module.exports = BillRepository;
