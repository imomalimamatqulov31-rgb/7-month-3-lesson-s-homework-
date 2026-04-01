import { HasMany, Model } from "sequelize-typescript"
import { AllowNull, AutoIncrement, Column, DataType,  Table } from "sequelize-typescript";
import { Category } from "src/modules/category/models/category.model";

interface IUser{
    firstname: string
    lastname: string
    age: number
    email: string
    gender: string
}

@Table({
    tableName: "users",
    timestamps: true
})
export class User extends Model<User, IUser> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })

    declare id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    
    declare firstname: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })

    declare lastname: string


    @Column({
        type: DataType.SMALLINT,
        allowNull: false,
    })

    declare age:number

   @Column({
    type: DataType.STRING,
    allowNull: false,
})
declare email: string


    @Column({
        type: DataType.STRING,
        values: ["male", "female"],
        allowNull: false
    })

    declare gender: string

    @HasMany(() => Category)
        categories: Category[]
}
