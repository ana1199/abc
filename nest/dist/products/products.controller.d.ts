import { ProductService } from "./products.service";
import { CreateProductRequestDto } from "./dto/create-product-request.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductRequestDto): Promise<{
        name: string;
        price: number;
        description: string;
        type: string;
    } & Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(id: string, project: UpdateProductDto): Promise<Product>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
