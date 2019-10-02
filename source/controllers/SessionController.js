//index, show, store, update, destroy
const User = require('../models/User');


module.exports = {
     async store(req, res) { // função criação de usuário
     const { email } = req.body;

     const user = await User.create({ email });
     
            return console.log(email);
    }
};
