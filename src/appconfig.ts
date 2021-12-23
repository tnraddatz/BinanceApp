import fs from 'fs';

const API_KEY: string = "RR5iukRhR8xqmm3ANFPdtfPbK9caBiKZjfMm4v5Uxa9UgzB4FhRZxlcASzriyf1v";

export abstract class AppConfig {
    public static fetchApiKey(): string {
        return process.env.API_KEY || API_KEY;
    }

    public static fetchSecretKey(): string {
        return process.env.SECRET_API_KEY || this.getSecretKeyFromFile();
    }

    private static getSecretKeyFromFile(): string {
        try {
            return fs.readFileSync("/Users/thomasraddatz/binance/binance_secret.txt").toString('utf-8').split('\n')[0];
        } catch (error) {
            throw new Error("Secret Key must be defined: " + error);
        }
    }
}
