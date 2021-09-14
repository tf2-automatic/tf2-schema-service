import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Quality {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    unique: true,
  })
  @Index()
  name: string;
}
