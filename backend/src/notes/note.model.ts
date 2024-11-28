import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT })
  content: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  archived: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  category: string;
}
