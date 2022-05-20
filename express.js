const express = require('express');
const app = app();

const PORT = process.env.PORT || 4001;



app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})