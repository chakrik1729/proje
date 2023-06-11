import Sequelize from 'sequelize';
import DataTypes from 'sequelize';


export const handler = async (event) => {


    const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
        host: process.env.HOST,
        dialect: 'postgres',
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    });
    //console.log(sequelize);
    
const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
  },
  
  age: {
    type: DataTypes.INTEGER,
  },

  employed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});


    try {

        var seq_obj = await sequelize.authenticate();
        console.log("Connection got Successful");
        var seq_obj2 = await User.sync();
        console.log("user table got created");
        const mike = User.create({
            email: "mike@example.com",
            fullName: "Mike Smith",
            age: 30,
            employed: true,
        });

        console.log(seq_obj);

    }
    catch (err) {
        console.log(err);
    }


    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
