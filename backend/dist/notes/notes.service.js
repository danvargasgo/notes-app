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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const note_model_1 = require("./note.model");
let NotesService = class NotesService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async findAll() {
        return this.noteModel.findAll();
    }
    async findByCategory(category) {
        return this.noteModel.findAll({ where: { category } });
    }
    async findArchived() {
        return this.noteModel.findAll({ where: { archived: true } });
    }
    async create(noteData) {
        return this.noteModel.create(noteData);
    }
    async update(id, updateData) {
        const note = await this.noteModel.findByPk(id);
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        await note.update(updateData);
        return note;
    }
    async delete(id) {
        const note = await this.noteModel.findByPk(id);
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        await note.destroy();
    }
    async toggleArchive(id) {
        const note = await this.noteModel.findByPk(id);
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        note.archived = !note.archived;
        await note.save();
        return note;
    }
    async getCategories() {
        const categories = await this.noteModel.findAll({
            attributes: ['category'],
            group: ['category'],
        });
        return categories.map((note) => note.category);
    }
    async createCategory(category) {
        const note = await this.noteModel.create({ category });
        return note.category;
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(note_model_1.Note)),
    __metadata("design:paramtypes", [Object])
], NotesService);
//# sourceMappingURL=notes.service.js.map