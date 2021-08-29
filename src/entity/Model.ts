import {
	BaseEntity,
	BeforeInsert,
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

// The other models will inherit all schema that exist in this class.
export default abstract class Model extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'uuid' })
	uuid: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeInsert()
	createUuid() {
		this.uuid = uuid();
	}

	// This is a generic that allows other classes to inherit from it.
	constructor(model?: Partial<any>) {
		super();
		Object.assign(this, model);
	}

	// Removes id from json response.
	toJSON() {
		return { ...this, id: undefined };
	}
}
