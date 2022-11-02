import PocketBase from "pocketbase";
import { PBDocumentType } from "../common/types/PocketBaseTypes";

const client = new PocketBase("http://127.0.0.1:8090");
export const BASE_API_URL = client.baseUrl + "/api";

export const getImageUrl = (image: string, doc: PBDocumentType) => {
    return `${BASE_API_URL}/collections/${doc["@collectionName"]}/${doc.id}/${image}`;
}

export default client;