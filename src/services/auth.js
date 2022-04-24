const bcrypt = require('bcrypt');

exports.createPasswordHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

exports.checkPassword = (user, password) => {
    bcrypt.compare(password, user.password);
}