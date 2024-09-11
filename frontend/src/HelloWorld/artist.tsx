
export interface Artist{
    Name:string,
    BirthDate:[number,number,number],
    ActiveYear:[number,number|'present'],
    NotableSong:string
}

export const ArtistLists: Artist[] = [
  {
    Name: 'Thom Yorke',
    BirthDate: [7, 10, 1968],
    ActiveYear: [1985, 'present'],
    NotableSong: 'Weird Fishes'
  },
  {
    Name: 'Adele',
    BirthDate: [5, 5, 1988],
    ActiveYear: [2006, 'present'],
    NotableSong: 'Rolling in the Deep'
  },
  {
    Name: 'Beyoncé',
    BirthDate: [4, 9, 1981],
    ActiveYear: [1997, 'present'],
    NotableSong: 'Single Ladies (Put a Ring on It)'
  },
  {
    Name: 'David Bowie',
    BirthDate: [8, 1, 1947],
    ActiveYear: [1964, 2016],
    NotableSong: 'Heroes'
  },
  {
    Name: 'Kurt Cobain',
    BirthDate: [20, 2, 1967],
    ActiveYear: [1987, 1994],
    NotableSong: 'Smells Like Teen Spirit'
  },
  {
    Name: 'Joni Mitchell',
    BirthDate: [7, 11, 1943],
    ActiveYear: [1964, 'present'],
    NotableSong: 'Big Yellow Taxi'
  }
];