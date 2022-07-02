import {v4 as uuid } from "uuid";
import { User } from '../entities/User';

export const getMockUser = (): User => ({
    user_id: uuid(),
    name: 'Algum nome',
    email: 'email@dio.ex'
})