import { PBDocumentType } from "./PocketBaseTypes";


export type PostType = PBDocumentType & {
    title: string;
    content: string;
    slug: string;
    image: string;
    preamble: string;
}