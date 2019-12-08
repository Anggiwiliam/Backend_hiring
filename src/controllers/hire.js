const hireModel = require('../models/hire')

module.exports = {
    // createHire: (req, res) => {
    //     const { id, created_by, job} = req.body
    //     const data = {
    //       id,
    //       created_by,
    //       job,
        
    //     }
    //     hireModel.createhire(data)
    //     .then(result => {
    //       res.json(result)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       return res.status(400).send(gagal)
    //     })
    //   },
      createHire: async(req, res) => {
        const token = req.headers.authorization
        try{
            // let data = JWT.verify(token, process.env.JWT_SECRET);
            // let id = data.id;
            const {
                id,
                created_by,
                job
               
            } = req.body;

            let dataHire = {
                id,
                created_by,
                job,
                
               
                
            }
            const result = await hireModel.createhire(dataHire);
            response(res, 200, {message: 'the hire was created'})
        }catch(err){
            console.log(err);
            
            response(res, 500, {message: "the server is error"})
        }
    },
     
    readHire: async(req, res) => {
        try{
            const result = await hireModel.readhire()
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    },
    readHireby: async(req, res) => {
        // return res.send(req.params);
        let user = req.params.id
        // return res.send(user);
        try{
            const result = await hireModel.readhireby(user)
            res.send(result)
        }catch(error) {
          
            res.send(error)
        }
    },
    updateHire: async(req, res) => {
        try{
            const result = await hireModel.updatehire(req.body, req.params)
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    },
    deleteHire: async(req, res) => {
        try{
            const result = await hireModel.deletehire(req.params)
            res.send(result)
        }catch(error) {
            
            res.send(error)
        }
    },
    searchHire: async(req, res) => {
        try{
            const result = await hireModel.searchhire(req.query)
            
            res.send(result)
        }catch(error) {
           
            res.send(error)
        }
    }
}