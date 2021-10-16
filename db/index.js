import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('magdely.db')

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, active BOOL NOT NULL, price DOUBLE NOT NULL, stock INT NOT NULL, cost DOUBLE NOT NULL, timePreparation INT NOT NULL, sync BOOL NOT NULL)',
                [],
                () => resolve(),
                (_, err) => reject(err)
                )
            }
        )
    }) 
}
