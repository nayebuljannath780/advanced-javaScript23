const students = [
    { id: 67, name: 'Nayebul' },
    { id: 47, name: 'foysol' },
    { id: 79, name: 'Shahrear' },
    { id: 48, name: 'Shakib' },
    { id: 56, name: 'Rahe' }
];
const name = students.map(sName => sName.name);
console.log(name);

const id = students.map(sId => sId.id);
console.log(id);

const smaller = students.filter(x => x.id < 70);
console.log("Smaller then 70 = ", smaller);

const biggerOne = students.find(x => x.id > 70);
console.log("Bigger then 70 = ", biggerOne);