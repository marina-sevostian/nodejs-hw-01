import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contscts = JSON.parse(data);
    return contscts;
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};
