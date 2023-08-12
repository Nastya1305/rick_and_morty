import { Gender, Status } from "./character";

export interface FilterState {
    name: string,
    species: string,
    type: string,
    status: Status | '',
    gender: Gender | ''
}

export enum FilterActionTypes {
    SET_NAME = 'SET_NAME',
    SET_SPECIES = 'SET_SPECIES',
    SET_TYPE = 'SET_TYPE',
    SET_STATUS = 'SET_STATUS',
    SET_GENDER = 'SET_GENDER'
}

interface SetNameAction {
    type: FilterActionTypes.SET_NAME,
    payload: string
}

interface SetSpeciesAction {
    type: FilterActionTypes.SET_SPECIES,
    payload: string
}

interface SetTypeAction {
    type: FilterActionTypes.SET_TYPE,
    payload: string
}

interface SetStatusAction {
    type: FilterActionTypes.SET_STATUS,
    payload: Status | 'all'
}

interface SetGenderAction {
    type: FilterActionTypes.SET_GENDER,
    payload: Gender | 'all'
}

export type FilterAction = SetNameAction | SetSpeciesAction | SetTypeAction | SetStatusAction | SetGenderAction