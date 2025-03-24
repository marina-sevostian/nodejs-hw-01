import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = [];
    await writeContacts(contacts);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

removeAllContacts();
