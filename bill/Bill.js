class Bill {
    constructor(bill) 
    {
        this.id               = bill.id;
        this.id_customer      = bill.id_customer;
        this.date_order       = bill.date_order;
        this.total            = bill.total;
        this.payment_status   = bill.payment_status;
        this.note             = bill.note;
    }
}

module.exports = Bill;
