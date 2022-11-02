import PocketBase from "pocketbase";
import { PBDocumentType } from "../common/types/PocketBaseTypes";

const client = new PocketBase("http://127.0.0.1:8090");
export const BASE_API_URL = client.baseUrl + "/api";

export const getImageUrl = (image: string, doc: PBDocumentType) => {
    return `http://127.0.0.1:8090/api/files/${doc["@collectionId"]}/${doc.id}/${image}`;
}

export default client;