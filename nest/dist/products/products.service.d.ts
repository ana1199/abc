import { CreateProductRequestDto } from "./dto/create-product-request.dto";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    createProduct(CreateProductDto: CreateProductRequestDto): Promise<{
        name: string;
        price: number;
        description: string;
        type: string;
    } & Product>;
    getAllProducts(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    findByName(name: string): Promise<Product>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
