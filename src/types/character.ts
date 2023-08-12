
export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface ICharacter {
   id: number,
   name: string,
   status: Status,
   species: string,
   type: string,
   gender: Gender,
   origin: string,
   location: string,
   image: string,
}