import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(process.cwd(), './src/data');

export async function writeData<T>(data: T, fileName: string): Promise<void> {
  try {
    const location = path.join(DATA_DIR, fileName);
    await fs.promises.mkdir(DATA_DIR, { recursive: true });
    await fs.promises.writeFile(location, JSON.stringify(data, null, 0));
    console.log(`Successfully written data to ${location}.`);
  } catch (error) {
    console.error(error);
  }
}
