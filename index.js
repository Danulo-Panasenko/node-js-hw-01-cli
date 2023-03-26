const contacts = require("./contacts.js");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      console.log(contactToRemove);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "IN2SUg162f-Dexg16wfs0" });
// invokeAction({
//   action: "add",
//   name: "Allen ppookk",
//   email: "mmm@fggg",
//   phone: "(501) 472-5218",
// });
// invokeAction({ action: "remove", id: "8ojzzGzovQiTfSlkWpZWK" });
