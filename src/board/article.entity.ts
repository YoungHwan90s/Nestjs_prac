import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ schema: "board", name: "articles" })
  export class Article {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;
  
    @Column("varchar", { length: 10 })
    author: string;
  
    @Column("varchar", { length: 50 })
    title: string;
  
    @Column("varchar", { length: 1000 })
    content: string;
  
    @Column("varchar", { select: false })
    password: string;

    @Column("int", {default: 0})
    view: number; // 새로 추가된 컬럼!
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
  }