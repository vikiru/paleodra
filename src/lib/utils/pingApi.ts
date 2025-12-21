import { API_URL } from '@/config';

const DELAY_MS = 30000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function pingApi(): Promise<Response> {
  const API_ENDPOINT = `${API_URL}/dinosaurs/?page=1`;
  let response = await fetch(API_ENDPOINT);

  if (!response.ok) {
    console.error(
      `Initial fetch failed with status ${response.status}. Waiting ${DELAY_MS / 1000} seconds for server startup.`,
    );

    await sleep(DELAY_MS);
    console.log('Finished waiting. Retrying API now...');

    response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      console.error(`Retry failed with status ${response.status}. API might not be fully operational.`);
    } else {
      console.log('Successfully pinged API on retry, it is up and running.');
    }
  } else {
    console.log('Successfully pinged API, it is up and running.');
  }

  return response;
}
