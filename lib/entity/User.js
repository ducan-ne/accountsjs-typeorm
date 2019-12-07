"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const lodash_1 = require("lodash");
const UserService_1 = require("./UserService");
const UserEmail_1 = require("./UserEmail");
const UserSession_1 = require("./UserSession");
let User = class User {
    constructor() {
        this.services = {};
    }
    async getServices() {
        this.services = (this.allServices || []).reduce((acc, service) => {
            lodash_1.set(acc, service.name, [
                ...[].concat(lodash_1.get(acc, service.name, [])),
                Object.assign({}, (service.token ? { token: service.token } : {}), service.options),
            ]);
            return acc;
        }, this.services);
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => UserService_1.UserService, userService => userService.user, { eager: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "allServices", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => UserEmail_1.UserEmail, userEmail => userEmail.user, { eager: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "emails", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => UserSession_1.UserSession, userSession => userSession.user, { eager: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "sessions", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "deactivated", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.AfterLoad(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "getServices", null);
User = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
