import { BelongsTo, ForeignKey, HasMany, Model } from "sequelize-typescript";
import {  Column, DataType, Table } from "sequelize-typescript";
import { Phone } from "src/modules/phones/models/phone.model";
import { User } from "src/modules/user/models/User.model";

interface ICategory{
    category_name: string,
    user_id: number
    
}

@Table({
    tableName: "categories",
    timestamps: true
})
export class Category extends Model<Category, ICategory> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare category_name: string

  

    @HasMany(() => Phone)
    phones: Phone[]

     @ForeignKey(() => User)
        @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
    
        declare user_id:number
    
        @BelongsTo(() => User)
        user: User
}


