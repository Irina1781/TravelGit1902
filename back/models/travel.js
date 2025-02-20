const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const travel = sequelize.define('travel_search', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
        },
        name: {
            type: DataTypes.TEXT, // Предполагаю, что имя пользователя - строка
            allowNull: false,       // Или true, если может быть NULL
        },
        photo: {
            type: DataTypes.TEXT, // Предполагаю, что имя таблицы - строка
            allowNull: false,        // Или true, если может быть NULL
        },
        description: {
            type: DataTypes.TEXT, // Предполагаю, что имя аккаунта - строка
            allowNull: false,       // Или true, если может быть NULL
        },
        geo: {                  
            type: DataTypes.TEXT, 
            allowNull: false, // Не должно быть NULL для связи
            
        },
        type: {                  
            type: DataTypes.INTEGER, 
            allowNull: false, // Не должно быть NULL для связи
            
        },
        climate: {                  
            type: DataTypes.INTEGER, 
            allowNull: false, // Не должно быть NULL для связи           
        },
        timezone: {                  
            type: DataTypes.INTEGER, 
            allowNull: false, // Не должно быть NULL для связи           
        },
        cost: {                  
            type: DataTypes.INTEGER, 
            allowNull: false, // Не должно быть NULL для связи
           
        },
        city: {                  
            type: DataTypes.ARRAY(DataTypes.TEXT), 
            allowNull: false, // Не должно быть NULL для связи
                    },
        more: {                  
            type: DataTypes.TEXT, 
            allowNull: false, // Не должно быть NULL для связи            
        },
    },{freezeTableName: true, timestamps: false,}
);

    return travel;
};
