class Product {
    constructor(id, name, description, active, price, stock, cost, timePreparation, sync, image) {
        this.id = id.toString()
        this.name = name,
        this.description = description,
        this.active = active,
        this.price = price,
        this.stock = stock,
        this.cost = cost,
        this.timePreparation = timePreparation,
        this.sync = sync,
        this.image = image
    }
}

export default Product