import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Test {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: ["listening", "reading", "writing", "speaking"]
    })
    moduleType: "listening" | "reading" | "writing" | "speaking";

    @Column("text")
    content: string

    @Column()
    answers: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    created_at: string

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updated_at: string
}
