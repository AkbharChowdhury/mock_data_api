const chance  = require('chance').Chance();
module.exports = () => {
    return {
        id: chance.integer({ min: 1_000, max: 9_999}),
        name: chance.name({ nationality: 'en'}),
        occupation: chance.profession({ rank: true }),
        salary: chance.dollar({ min: 15_000, max: 150_000}),
        age: chance.age({ type: 'adult' }),
        address: {
            address: chance.address(),
            city: chance.city(),
            country: chance.country({ full: true }),
            postcode: chance.postcode()

        },
        desc: chance.paragraph({ sentences: 2 }),
    }

};