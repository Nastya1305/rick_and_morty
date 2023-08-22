import { Gender, Status } from "./character";

export interface FilterState {
    name: string,
    species: string,
    type: string,
    status: Status | '',
    gender: Gender | '',
    page: number
}

