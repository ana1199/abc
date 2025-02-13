"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_request_dto_1 = require("./create-product-request.dto");
class UpdateProductDto extends (0, swagger_1.PartialType)(create_product_request_dto_1.CreateProductRequestDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map