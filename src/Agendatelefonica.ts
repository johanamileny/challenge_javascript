class Contact {
    constructor(public name: string, public phone: string) {}
}

class Phonebook {
    private contacts: Map<string, Contact>;

    constructor() {
        this.contacts = new Map<string, Contact>();
    }

    addContact(name: string, phone: string): void {
        const contact = new Contact(name, phone);
        this.contacts.set(name, contact);
        console.log(`Contact ${name} added.`);
    }

    findContact(name: string): void {
        const contact = this.contacts.get(name);
        if (contact) {
            console.log(`The phone number of ${name} is ${contact.phone}`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }

    deleteContact(name: string): void {
        if (this.contacts.delete(name)) {
            console.log(`Contact ${name} deleted.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }

    listContacts(): void {
        if (this.contacts.size === 0) {
            console.log('No contacts available.');
            return;
        }

        console.log('Contacts list:');
        this.contacts.forEach(contact => {
            console.log(`${contact.name}: ${contact.phone}`);
        });
    }
}


const myPhonebook = new Phonebook();

// Add some contacts to the phonebook
myPhonebook.addContact("Alice", "312206043");
myPhonebook.addContact("Bob", "3124567889");
myPhonebook.addContact("Charlie", "123456788");


const searchName = "Alice";

myPhonebook.findContact(searchName);

myPhonebook.listContacts();

myPhonebook.deleteContact("Bob");

myPhonebook.listContacts();
