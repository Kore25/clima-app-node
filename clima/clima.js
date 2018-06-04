const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c7b6be9bae1bc7c65c8b8a8eb08784c8&units=metric`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let datos = resp.data.main;

    return datos.temp;

}

module.exports = {
    getClima
}