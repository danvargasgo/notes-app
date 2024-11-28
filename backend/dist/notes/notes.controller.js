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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
let NotesController = class NotesController {
    constructor(notesService) {
        this.notesService = notesService;
    }
    async getAllNotes(category) {
        if (category) {
            return this.notesService.findByCategory(category);
        }
        return this.notesService.findAll();
    }
    async getArchivedNotes() {
        return this.notesService.findArchived();
    }
    async createNote(noteData) {
        return this.notesService.create(noteData);
    }
    async updateNote(id, updateData) {
        return this.notesService.update(+id, updateData);
    }
    async deleteNote(id) {
        await this.notesService.delete(+id);
        return { message: `Note with ID ${id} deleted successfully` };
    }
    async toggleArchive(id) {
        return this.notesService.toggleArchive(+id);
    }
    async getCategories() {
        return this.notesService.getCategories();
    }
    async getNotesByCategory(category) {
        return this.notesService.findByCategory(category);
    }
    async createCategory(category) {
        return this.notesService.createCategory(category);
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Get)('archived'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getArchivedNotes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "updateNote", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "deleteNote", null);
__decorate([
    (0, common_1.Patch)(':id/archive'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "toggleArchive", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('category/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getNotesByCategory", null);
__decorate([
    (0, common_1.Post)('category'),
    __param(0, (0, common_1.Body)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createCategory", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map