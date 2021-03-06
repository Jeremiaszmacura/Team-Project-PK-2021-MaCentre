import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne} from "typeorm";
import {User} from "./User";
import {Product} from "./Product";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    text: string;

    @Column()
    productId: number;

    @Column()
    commentId: number;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    created_at: Date;

    @OneToMany(type => Comment, comment => comment.id)
    comments: Comment[];

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @ManyToOne(type => Comment, comment => comment.comments)
    comment: Comment;

    @ManyToOne(type => Product, product => product.comments)
    product: Product;

}