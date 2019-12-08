require('dotenv/config')
const conn = require('../config/db')

module.exports = {
    createProject: (body) => {
        return new Promise ((resolve, reject) => {
            conn.query(`INSERT INTO projects SET ?`, body, (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readEngineerProject: (body) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM projects WHERE id_engineer = ?`, body, 
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    readCompanyProject: (body) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM projects WHERE id_company = ?`, body, 
            (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    updateProject: (body, param1, param2) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE projects SET ? WHERE id = ? AND id_company = ?`, [body, param1, param2], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    },
    deleteProject: (param1, param2) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM projects WHERE id = ? AND id_company = ?`, [param1, param2], (err, result) => {
                if(err) reject(err)
                resolve(result)
            })
        })
    }
}