// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers')
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");


program.parse(process.argv);

const options = program.opts();

const contactsOperations = require('./contacts')

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
      const contacts = await contactsOperations.getAll();
      console.log(contacts)
      break;

    case 'get':
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact)
      break;

    case 'add':
      const newContact = await contactsOperations.add(name, email, phone);
      console.log(newContact);
      break;
    
      case 'updateById':
      const updateContact = await contactsOperations.updateById(id, data);
            if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updateContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.remove(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

  
invokeAction(options);


//  try {
//   (async () => {
//     await invokeAction({action: "add", data: newContact});
//    })();
   
//  } catch (error) {
//   console.log(error);
//  }

// const arr = hideBin(process.argv) //array of all commands
// const { argv } = yargs(arr)


