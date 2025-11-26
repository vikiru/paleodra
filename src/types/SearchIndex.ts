import type { Dinosaur } from "@/types/Dinosaur";

export type SearchIndex = Pick<Dinosaur, "id" | "name">;

export type SearchMatch = {
    id: number;
    name: string;
    link: string;
}
