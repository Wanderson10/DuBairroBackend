import{ Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";


@Entity("companys")
export class Company {
  @PrimaryGeneratedColumn("uuid") 
  readonly id: string

  
  @Column({ length: 120, unique: true })
  companyName: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 140 })
  @Exclude()
  password: string;

  @Column({ length: 50 })
  telefone: string;

  @Column()
  logoCompany: string;

  @Column({ length: 2000 })
  companyDescripition: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 120 })
  bairro: string;

  @Column({ length: 50 })
  tipe: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;



  
}
