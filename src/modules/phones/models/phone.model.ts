import { INTEGER } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/modules/category/models/category.model";

interface IPhones{
    phone_name: string,
    phone_price: number,
    category_id: number
}

@Table({
    tableName: "phones",
    timestamps: true
})
export class Phone extends Model<Phone, IPhones> {
    @Column({
         type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })

    declare id:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare phone_name:string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare phone_price:number

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare category_id:number

    @BelongsTo(() => Category)
    category: Category
}


