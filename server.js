        const path = require('path');

        const express = require('express');
        const app = express();
        const port = 3000;

        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        });

        app.listen(port, () => {
          console.log(`Server running at http://localhost:${port}/`);
        });