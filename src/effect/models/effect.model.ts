import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Effect {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Column({
    unique: true,
  })
  system: string;

  @Column()
  attach_to_rootbone: boolean;

  @Column()
  @Index()
  name: string;
}
