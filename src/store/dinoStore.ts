import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createCustomStorage } from "@/store/customStorage";

type DinoState = {
	seenIds: Set<number>;
    getAllSeenIds: () => number[];
	markAsSeen: (id: number) => void;
	clearSeenIds: () => void;
};

export const useDinoStore = create<DinoState>()(
	persist(
		immer((set, get) => ({
			seenIds: new Set<number>(),
            getAllSeenIds: () => Array.from(get().seenIds),
			markAsSeen: (id) =>
				set((state) => {
					state.seenIds.add(id);
				}),
			clearSeenIds: () =>
				set((state) => {
					state.seenIds.clear();
				}),
		})),
		{
			name: "dino-store",
			storage: createCustomStorage<DinoState>(),
		},
	),
);
