import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts) {
      return;
    }
    const lengthContacts = contacts.length;
    return lengthContacts;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

console.log(await countContacts());
