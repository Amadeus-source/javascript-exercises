const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    let oldest = people[0];
    let ageOldest = 0;
    let gap = 0;
    people.forEach(person => {
        if(!person.yearOfDeath) {
            gap = thisYear - person.yearOfBirth;
        } else {
            gap = person.yearOfDeath - person.yearOfBirth;
        }
        if(gap > ageOldest) {
            oldest = person;
            ageOldest = gap;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
