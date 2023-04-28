import express from 'express';
import path from 'path';

const app = express();

app.listen(5000, () => {
    console.log('server running on http://localhost:5000');
}
)