

export interface CharacterState {
   characters: ICharacter[],
   info: CharacterStateInfo,
   isLoading: boolean,
   error: string
}

export interface CharacterStateInfo {
   count: number,
   pages: number
}

export interface ICharacter {
   id: number,
   name: string,
   status: Status,
   species: string,
   type: string,
   gender: Gender,
   origin: { name: string },
   location: { name: string },
   image: string,
   episode: string[]
}

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
