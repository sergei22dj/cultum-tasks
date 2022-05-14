export interface Character {
    name: string;
    id: string;
    photo: string;
    state: boolean;
  }
  
  export const characters: Character[] = [
    {
        id: '1',
        name: 'zitz',
        photo: '/static/images/zitz.jpg',
        state: true
    },
    {
        id: '2',
        name: 'rush',
        photo: '/static/images/rush.jpg',
        state: false
    },
    {
        id: '3',
        name: 'pimple',
        photo: '/static/images/pimple.jpg',
        state: true
    }
]