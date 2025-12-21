import fs from 'node:fs';
import path from 'node:path';

export async function checkFileExists(fileName: string): Promise<boolean> {
  try {
    const filePath = path.resolve(process.cwd(), `./src/data/${fileName}`);
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    console.error(`An error occured while trying to check if the file exists, ${error}`);
    return false;
  }
}

export async function readFile<T>(fileName: string): Promise<T | null> {
  try {
    const filePath = path.resolve(process.cwd(), `./src/data/${fileName}`);
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`An error occured while trying to read the file, ${error}`);
    return null;
  }
}
