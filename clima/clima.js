const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b8513aaf1a91d77d1a7d74d41c182a23&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}