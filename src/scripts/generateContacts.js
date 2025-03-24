import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      contacts = [];
    }
    for (let i = 0; i < number; i++) {
      const newContacts = createFakeContact();
      contacts.push(newContacts);
    }
    await writeContacts(contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5);
