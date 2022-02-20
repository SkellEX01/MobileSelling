class BillDetail 
{
    constructor(billDetail) 
    {
        this.id         = billDetail.id;
        this.id_bill    = billDetail.id_bill;
        this.id_product = billDetail.id_product;
        this.quantity   = billDetail.quantity;
        this.unit       = billDetail.unit;
    }
}

module.exports = BillDetail;
