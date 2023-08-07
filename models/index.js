const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Location.belongstoMany(Traveller, { through: Trip })

Traveller.belongstoMany(Location, { through: Trip })

module.exports = {
    Traveller,
    Location,
    Trip
}