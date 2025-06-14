import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';

@Table({ tableName: 'Product', createdAt: true, updatedAt: true })
export class Product extends Model {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
    })
    declare id: string;  // 👈 Aqui está a correção

    @Column({
        allowNull: false,
        unique: true,
    })
    declare name: string;

    @Column
    declare price: number;

    @Column
    declare category: string;

    @Column
    declare rating: number;
}
