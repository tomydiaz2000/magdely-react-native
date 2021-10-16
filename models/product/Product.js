class Product {
    constructor(id, name, description, active, price, stock, cost, timePreparation, sync) {
        this.id = id.toString()
        this.name = name,
        this.description = description,
        this.active = active,
        this.price = price,
        this.stock = stock,
        this.cost = cost,
        this.timePreparation = timePreparation,
        this.sync = sync
    }
}

export default Product