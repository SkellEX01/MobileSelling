const Customer = require('./Customer');

class CustomerRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let customers = await this.knex.select('*').from('Customer');
        return customers.map(customer => this.factory(customer));
    }

    async add(data) 
    {
        let addInfoCustomer = await this.knex('Customer').insert(data);

        return this.factory({
            ...data,
            id: addInfoCustomer[0].id
        });
    }

    factory(customer) 
    {
        return new Customer(customer);
    }
}

module.exports = CustomerRepository;
