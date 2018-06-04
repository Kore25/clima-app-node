const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyByevsTx5p4dG2BXRVu5mJJ0e3HJVaAxYE`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let direccionForm = resp.data.results[0].formatted_address;
    let location = resp.data.results[0].geometry.location;

    // console.log('Dirección: ', direccion);
    // console.log('Latitud: ', location.lat);
    // console.log('Longitud: ', location.lng);

    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);

    return {
        direccionForm,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLng
}