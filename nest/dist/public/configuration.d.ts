export declare const configuration: () => {
    NODE_ENV: string;
    PORT: number;
    TEST: boolean;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DB_PORT: string;
    JWT_SECRET: string;
};
export declare enum Environment {
    Development = "development",
    Production = "production",
    Test = "test"
}
export declare class IConfig {
    NODE_ENV: string;
    PORT: number;
    JWT_SECRET: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DB_PORT: number;
}
export declare function validate(config: Record<string, unknown>): IConfig;
