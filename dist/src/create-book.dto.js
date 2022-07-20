"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateBookDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, published: { required: true, type: () => Boolean } };
    }
}
exports.CreateBookDto = CreateBookDto;
//# sourceMappingURL=create-book.dto.js.map