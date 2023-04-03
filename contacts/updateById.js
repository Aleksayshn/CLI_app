const getAll = require('./getAll')
const updateContacts = require('../helpers/updateContacts')

const updateById = async (id, name, email, phone) => {

        const contacts = await getAll();
        const indx = contacts
            .findIndex(item => item.id === id); 
        if (indx === -1) {
            return null;
        }
        contacts[indx] = {id, name, email, phone}
    await updateContacts(contacts)

        return contacts[indx];

}

module.exports = updateById;