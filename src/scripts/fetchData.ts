import fs from 'node:fs';
import path from 'node:path';
import { API_URL } from '@/config';
import type { Dinosaur } from '@/types/Dinosaur';

const FILEPATH = path.resolve(process.cwd(), './src/data/dinos.json');
const DELAY = 30000;
const MAX_PAGE = 23;

async function pingApi() {
    const response = await fetch(`${API_URL}/dinosaurs/?page=1`);
    if (!response) {
        console.error(
            'Failed to fetch data from URL, waiting 30 seconds for Render to start.',
        );
        setTimeout(() => {
            console.log('Finished waiting 30 seconds. Retrying now.');
        }, DELAY);
    } else {
        console.log('Successfully pinged API, it is up and running. ');
    }
    return response;
}

async function writeData(data: Dinosaur[]) {
    try {
        const dir = path.dirname(FILEPATH);
        await fs.promises.mkdir(dir, { recursive: true });
        await fs.promises.writeFile(FILEPATH, JSON.stringify(data, null, 2));
        console.log(`Successfully written data to ${FILEPATH}.`);
    } catch (error) {
        console.error(error);
    }
}

async function fetchData(): Promise<Dinosaur[]> {
    try {
        let pageCount = 0;
        const dinos: Dinosaur[] = [];
        const initialPingResponse = await pingApi();
        if (initialPingResponse.ok) {
            pageCount++;
            const responseData = await initialPingResponse.json();
            dinos.push(...responseData.data);
        }
        while (pageCount <= MAX_PAGE) {
            console.log(`Fetching page ${pageCount} from API.`);
            const response = await fetch(
                `${API_URL}/dinosaurs/?page=${pageCount}`,
            );
            if (response.ok) {
                console.log(`Successfully fetched page ${pageCount} from API.`);
                pageCount++;
                const responseData = await response.json();
                dinos.push(...responseData.data);
            } else {
                console.error(`Failed to fetch page ${pageCount} from API.`);
                break;
            }
        }
        return dinos;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function main() {
    const dinos = await fetchData();
    await writeData(dinos);
}
main();
// TODO: cleanup script, use logger. Improve error handling.
// TODO: split to util fns
