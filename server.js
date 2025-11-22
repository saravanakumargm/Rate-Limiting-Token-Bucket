import { PORT } from './src/config.js';
import app from './src/app.js';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});