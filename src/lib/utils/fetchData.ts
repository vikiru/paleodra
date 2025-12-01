import { API_URL } from '@/config';
import { pingApi } from '@/lib/utils/pingApi';
import type { Dinosaur } from '@/types/Dinosaur';

const MAX_PAGE = 24;
export async function fetchData(): Promise<Dinosaur[]> {
  try {
    let pageCount = 1;
    const dinos: Dinosaur[] = [];

    console.log('Fetching page 1 from API.');
    const initialPingResponse = await pingApi();
    if (initialPingResponse.ok) {
      const responseData = await initialPingResponse.json();
      dinos.push(...responseData.data);
    } else {
      console.error('Failed to fetch page 1 from API.');
      return [];
    }

    pageCount++;

    while (pageCount <= MAX_PAGE) {
      console.log(`Fetching page ${pageCount} from API.`);

      const response = await fetch(`${API_URL}/dinosaurs/?page=${pageCount}`);
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
    console.error('An error occurred while fetching data from API: ', error);
    return [];
  }
}
