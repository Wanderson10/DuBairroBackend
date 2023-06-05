import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuidv4 } from "uuid";

@Entity('companys')
export class Company {
 
    @PrimaryColumn("uuid") 
    readonly id: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
  @Column()
  companyName: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 140 })
  @Exclude()
  password: string;
  
  @Column({length:50})
  telefone: string;

  @Column()
  logoCompany: string;

  @Column()
  companyDescripition: string;

  @Column()
  city: string;

  @Column({ length: 120 })
  bairro: string;

  @Column({ length: 50 ,  })
  tipe: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  
}
