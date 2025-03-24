import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

console.log(await getAllContacts());
