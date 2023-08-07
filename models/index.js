const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Location.belongstoMany(Traveller, { through: Trips })

Traveller.belongstoMany(Location, { through: Trips })

module.exports = {
    Traveller,
    Location,
    Trips
}