import { SearchIndex, SearchMatch } from '@/types/SearchIndex';
import { Document, DocumentData, Id } from 'flexsearch';

type SearchResult = {
    id: Id;
    doc: {
        name: string;
    } | null;
    highlight?: string;
};

const document = new Document({
    document: {
        id: "id",
        store: ["name"],
        index: ["name"],
    },
    tokenize: "full", // full (matches anywhere in str), forward (matches from start of str)
    preset: "match",
});

const searchOptions = {
    index: ["name"],
    enrich: true,
    limit: 10,
}

export function createSearchIndex(data: SearchIndex[]): Document<DocumentData, false, false> {
    data.forEach((item: SearchIndex) => {
        document.add(item);
    });
    return document;
}


export function searchQuery(
    document: Document<DocumentData, false, false>,
    query: string
): SearchMatch[] {
    const cleanQuery = query.replace(/[^\w\s]/gi, '').trim().toLowerCase();
    const searchResult = document.search(cleanQuery, searchOptions);
    const matches = (searchResult?.[0]?.result as SearchResult[] | undefined) ?? [];

    return matches.reduce<SearchMatch[]>((results, match) => {
        if (match.doc) {
            results.push({
                id: Number(match.id),
                name: match.doc.name,
                link: `/dinos/${match.id}`
            });
        }
        return results;
    }, []);
}

