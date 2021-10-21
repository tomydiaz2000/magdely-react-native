import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('magdely.db')

export const insertProduct = (
    name,
    description,
    active, 
    price,
    stock,
    cost,
    timePreparation,
    sync,
    image
) => {
    console.log('timePreparation: ' + timePreparation)

    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql('INSERT INTO products (name, description, active, price, stock, cost, timePreparation, sync, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
                [name, description, active, price, stock, cost, timePreparation, sync, image],
                (_, result) => resolve(result),
                (_, err) => reject(err)
                )
            }
        )
    })
}

export const fetchProduct = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx => {
            tx.executeSql('SELECT * FROM products',
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err))
        }))
    })
}
    


