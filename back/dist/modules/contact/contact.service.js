"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const contact_repository_1 = require("./repository/contact.repository");
let ContactService = class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(createContactDto, id_client) {
        const contact = await this.contactRepository.create(createContactDto, id_client);
        return contact;
    }
    async findAll() {
        const contacts = await this.contactRepository.findAll();
        return contacts;
    }
    async findOne(id) {
        const find_contact = await this.contactRepository.findOne(id);
        return find_contact;
    }
    async update(id, updateContactDto) {
        const update_contact = await this.contactRepository.update(id, updateContactDto);
        return update_contact;
    }
    async remove(id) {
        await this.contactRepository.delete(id);
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contact_repository_1.ContactRepository])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map