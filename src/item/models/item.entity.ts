import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Item {
  @Column()
  name: string;

  @PrimaryColumn({
    type: 'int',
  })
  defindex: number;

  @Column()
  item_class: string;

  @Column()
  item_type_name: string;

  @Column()
  item_name: string;

  @Column()
  proper_name: boolean;

  @Column({
    nullable: true,
  })
  item_slot: string;

  @Column({
    type: 'int',
  })
  item_quality: number;

  @Column({
    type: 'int',
  })
  min_ilevel: number;

  @Column({
    type: 'int',
  })
  max_ilevel: number;

  @Column({
    nullable: true,
  })
  image_url: string;

  @Column({
    nullable: true,
  })
  image_url_large: string;

  @Column({
    type: 'jsonb',
  })
  capabilities: { [key: string]: string };

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  used_by_classes: string[];
}
