import { fetchData } from "@/lib/utils/fetchData";
import { checkFileExists, readFile } from "@/lib/utils/readFile";
import { writeData } from "@/lib/utils/writeData";
import type { Dinosaur } from "@/types/Dinosaur";
import type { SearchIndex } from "@/types/SearchIndex";
import { createSearchIndex, searchQuery } from "@/lib/utils/flexSearch";

async function main() {
	const filesExist = await Promise.all([
		checkFileExists('dinosaurs.json'),
		checkFileExists('searchIndex.json'),
	]);
    if (filesExist[0] && filesExist[1]) {
        console.log("The data files already exist. Skipping fetch of data.");
	 	return;
	}

	console.log("Fetching dinosaur data from API...");
	const dinos = await fetchData();
	console.log("Finished fetching dinosaur data from API.");
	
	const sortedDinos: Dinosaur[] = dinos.sort((a, b) => a.id - b.id);

	const searchIndex: SearchIndex[] = [];
	sortedDinos.forEach((dino) => {
		searchIndex.push({
			id: dino.id,
			name: dino.name,
		});
	});

	console.log("Writing data to file...");
	await writeData<Dinosaur[]>(sortedDinos, "dinosaurs.json");
	await writeData<SearchIndex[]>(
		searchIndex,
		"searchIndex.json",
	);
	console.log("Finished writing data to files.");
}
main();
