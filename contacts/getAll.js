const fs = require('fs/promises');
const filePath = require('../helpers/filePath');

const getAll = async () => {

        const data = await fs.readFile(filePath);
        const contacts = JSON.parse(data);
        return contacts;
}

module.exports = getAll;