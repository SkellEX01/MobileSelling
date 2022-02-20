class Customer 
{
    constructor(customer) 
    {
        this.id         = customer.id;
        this.gender     = customer.gender;
        this.name       = customer.name;
        this.email      = customer.email;
        this.address    = customer.address;
        this.phone      = customer.phone;
        this.note       = customer.note;
    }
}

module.exports = Customer;
