require('dotenv/config')
const conn = require('../config/db')

module.exports = {
    createhire: (data) => {
        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO hire SET ?`, data, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readhire: (body) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM hire WHERE id_engineer = ?`, body, 
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readCompanyhire: (body) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM hire WHERE id_company = ?`, body, 
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updatehire: (body, param1, param2) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE hires SET ? WHERE id = ? AND id_company = ?`, [body, param1, param2], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    deletehire: (param1, param2) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM hires WHERE id = ? AND id_company = ?`, [param1, param2], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}