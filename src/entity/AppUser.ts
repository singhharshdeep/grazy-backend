import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AppUser {

    constructor(name: string, email: string, username: string, passwordHash: string) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.passwordHash = passwordHash;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    passwordHash: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    createdAt: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updatedAt: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    lastLogin: string

}
