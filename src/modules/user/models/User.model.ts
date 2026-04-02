import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IUser {
   firstname: string;
   lastname: string;
   email: string;
    password: string; 
}

@Table({
    tableName: 'users',
    timestamps: true,
})

export class User extends Model<User, IUser>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })

    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare lastname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;
}