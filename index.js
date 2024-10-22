const axios  = require('axios');



const url  = "https://sonarcloud.io/project/overview?id=antechter0711_AI-VIETNAM-24-HOMEWORK";

axios.get(url).then((response) => {
    console.log(response.data.json());
}).catch((error) => {
    console.log(error);
});
