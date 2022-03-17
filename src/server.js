import express from 'express';
import { mapOrder } from '*/utilities/sorts';

const app = express();

const hostname = 'localhost'
const port = 8080

app.get('/', (req, res) => {
    res.end('<h1>Hello world! tong tai <hr /></h1>')
})

app.listen(port, hostname, () => {
    console.log(`Hello tongtai, I'm running at ${hostname}:${port}/`)
})