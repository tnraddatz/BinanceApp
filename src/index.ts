import fs from 'fs';

var mystring: string = "mystring";
var API_KEY: string = "RR5iukRhR8xqmm3ANFPdtfPbK9caBiKZjfMm4v5Uxa9UgzB4FhRZxlcASzriyf1v"
var SECRET_KEY: string | undefined = process.env.SECRET_API_KEY;
if (SECRET_KEY === undefined) {
    try {
        var secret_key: string = fs.readFileSync("/Users/thomasraddatz/binance/binance_secret.txt").toString('utf-8');
        secret_key = secret_key.split('\n')[0]
    } catch (error) {
        throw new Error("Secret Key must be defined: " + error);
    }
}