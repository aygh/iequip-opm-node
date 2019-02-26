const mysql = require('mysql')

const baseConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'iequip'
}

const connection = mysql.createConnection(baseConfig)

exports.query = (...args) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query(...args, (err, data) => {
                if(err) throw err
                try {
                    resolve([...data])    
                } catch (error) {
                    resolve(data)
                }
                
            })
        } catch (error) {
            reject(error)            
        }
    })
}

exports.port = 3001
