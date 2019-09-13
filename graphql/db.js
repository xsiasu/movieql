export const people  =  [
    {   id : "1",
        name : "sean",
        age : 49,
        gender : "female"
    },
    {   id : "2",
        name : "yumi",
        age : 49,
        gender : "female"
    },
    {   id : "3",
        name : "sohui",
        age : 49,
        gender : "female"
    } 
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}
