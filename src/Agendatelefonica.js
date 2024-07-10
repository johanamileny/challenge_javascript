var Contact = /** @class */ (function () {
    function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    return Contact;
}());
var Phonebook = /** @class */ (function () {
    function Phonebook() {
        this.contacts = new Map();
    }
    Phonebook.prototype.addContact = function (name, phone) {
        var contact = new Contact(name, phone);
        this.contacts.set(name, contact);
        console.log("Contact ".concat(name, " added."));
    };
    Phonebook.prototype.findContact = function (name) {
        var contact = this.contacts.get(name);
        if (contact) {
            console.log("The phone number of ".concat(name, " is ").concat(contact.phone));
        }
        else {
            console.log("Contact ".concat(name, " not found."));
        }
    };
    Phonebook.prototype.deleteContact = function (name) {
        if (this.contacts.delete(name)) {
            console.log("Contact ".concat(name, " deleted."));
        }
        else {
            console.log("Contact ".concat(name, " not found."));
        }
    };
    Phonebook.prototype.listContacts = function () {
        if (this.contacts.size === 0) {
            console.log('No contacts available.');
            return;
        }
        console.log('Contacts list:');
        this.contacts.forEach(function (contact) {
            console.log("".concat(contact.name, ": ").concat(contact.phone));
        });
    };
    return Phonebook;
}());
var myPhonebook = new Phonebook();
// Add some contacts to the phonebook
myPhonebook.addContact("Alice", "312206043");
myPhonebook.addContact("Bob", "3124567889");
myPhonebook.addContact("Charlie", "123456788");
var searchName = "Alice";
myPhonebook.findContact(searchName);
myPhonebook.listContacts();
myPhonebook.deleteContact("Bob");
myPhonebook.listContacts();
