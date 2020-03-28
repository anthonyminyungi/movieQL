export const people = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'female',
  },
  {
    id: '1',
    name: 'Jack',
    age: 18,
    gender: 'male',
  },
  {
    id: '2',
    name: 'John',
    age: 18,
    gender: 'female',
  },
  {
    id: '3',
    name: 'Lee',
    age: 18,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Kim',
    age: 18,
    gender: 'female',
  },
  {
    id: '5',
    name: 'Travis',
    age: 18,
    gender: 'female',
  },
  {
    id: '6',
    name: 'Kan',
    age: 18,
    gender: 'female',
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
