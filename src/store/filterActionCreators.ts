import { FilterAction, FilterActionTypes } from "types/filter";
import { Gender, Status } from "types/character";


export function setName(name: string): FilterAction {
    return { type: FilterActionTypes.SET_NAME, payload: name }
}

export function setSpecies(species: string): FilterAction {
    return { type: FilterActionTypes.SET_SPECIES, payload: species }
}

export function setType(type: string): FilterAction {
    return { type: FilterActionTypes.SET_TYPE, payload: type }
}

export function setGender(gender: Gender | 'all'): FilterAction {
    return { type: FilterActionTypes.SET_GENDER, payload: gender }
}

export function setStatus(status: Status | 'all'): FilterAction {
    return { type: FilterActionTypes.SET_STATUS, payload: status }
}
