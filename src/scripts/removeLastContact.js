import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts) {
      return;
    }
    const lengthContacts = contacts.length;
    const newArray = contacts.slice(0, lengthContacts - 1);
    await writeContacts(newArray);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

removeLastContact();
