import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GHOST = 'ghost'
}

@Entity()
export class User {


    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GHOST
    })
    role: UserRole

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ default: new Date() })
    updatedAt: Date;

}
