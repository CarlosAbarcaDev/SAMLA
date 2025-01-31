import { Table, Column, DataType, HasMany, BelongsTo, ForeignKey, Model } from "sequelize-typescript";

@Table({
    tableName: "credits",
})

class Credits extends Model {
    
    @Column({
        type: DataType.STRING(100),
    })
    declare name: string;
    @Column({
        type: DataType.STRING(100),
    })
    declare lastname: string;
    @Column({
        type: DataType.STRING(100),
    })
    declare email: string;
    @Column({
        type: DataType.INTEGER,
    })
    declare phone: number;
    @Column({
        type: DataType.INTEGER,
    })
    declare id_type: number;
    @Column({
        type: DataType.INTEGER,
    })
    declare id_number: number;
    @Column({
        type: DataType.INTEGER,
    })
    declare state: number;
    @Column({
        type: DataType.INTEGER,
    })
    declare city: number;
    @Column({
        type: DataType.STRING(100),
    })
    declare address: string;
    @Column({
        type: DataType.INTEGER,
    })
    declare salary: number;
}


 export default Credits;