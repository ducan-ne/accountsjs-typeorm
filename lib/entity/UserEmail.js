"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let UserEmail = class UserEmail {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    tslib_1.__metadata("design:type", String)
], UserEmail.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => User_1.User, user => user.emails, { onDelete: 'CASCADE' }),
    tslib_1.__metadata("design:type", User_1.User)
], UserEmail.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.Unique(['address']),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], UserEmail.prototype, "address", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], UserEmail.prototype, "verified", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UserEmail.prototype, "userId", void 0);
UserEmail = tslib_1.__decorate([
    typeorm_1.Entity()
], UserEmail);
exports.UserEmail = UserEmail;
