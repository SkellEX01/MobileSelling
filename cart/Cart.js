class Cart 
{
    constructor(product) 
    {
        this.id            = product.id;
        this.id_type       = product.id_type;
        this.id_promotion  = product.id_promotion;
        this.name          = product.name;
        this.price         = product.price;
        this.warranty      = product.warranty;
        this.image         = product.image;
        this.description   = product.description;
    }
}

module.exports = Cart;
