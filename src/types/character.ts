export interface ICharacter {
   id: number,
   name: string,
   status: 'Alive' | 'Dead' | 'unknown',
   species: string,
   type: string,
   gender: 'Female' | 'Male' | 'Genderless' | 'unknown',
   origin: string,
   location: string,
   image: string,
}