const express = require("express");
const app = express();

app.use('/', express.static('./public/'));

app.listen(80, function () {
    console.log('Приложение запущено на порту 80');
});