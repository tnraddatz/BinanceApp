import fs from 'fs';
import { AppConfig } from './appconfig';
const { Spot } = require('@binance/connector')

async function myFunction() {
    const client = new Spot(AppConfig.fetchApiKey(), AppConfig.fetchSecretKey())
    try {
        var accountData = await client.account();
    } catch (error: any) {
        console.log(error.response.data.msg);
    }
}

myFunction()
console.log("done")