import { createClient as _createClient } from '@hey-api/client-fetch';
import {readGenre} from "./client";
export * from './client'
export const createClient = _createClient;

export const initDevClient = () => {
    createClient({
        baseUrl: 'http://localhost:8080',
    });


}

