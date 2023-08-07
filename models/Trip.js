const { Model, DataTypes } = require('sequelize');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: DataTypes.INTEGER,
        },
        traveller_amount: {
            type: DataTypes.INTEGER
        },
        traveller_id: {
            references: {
                model: 'Traveller',
                key: 'id'
            },
            unique: false
        },
        location_id: {
            references: {
                model: 'Location',
                key: 'id'
            },
            unique: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }   
)

module.exports = Trip