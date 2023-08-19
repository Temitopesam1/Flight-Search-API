const axios = require('axios');

const searchFlights = async (req, res) => {
    
    if (!req.query) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const { 
        departureDateTime,
        arrivalDatetime,
        carrierCode,
        flightNumber,
        departureAirport,
        arrivalAirport,
        aircraftRegNum,
        flightType,
        codeType,
        serviceType,
        after
    } = req.query;

    if (!departureDateTime && !arrivalDatetime) {
        return res.status(400).json({ error: 'At least one of Departure or Arrival DateTime is required.' });
    }
    else if (departureAirport || arrivalAirport || carrierCode){
        if (!codeType){
            return res.status(400).json({ error: "Code Type should be provided when 'Carrier Code', 'Arrival Airport' or 'Departure Airport' is set" });
        }
    }

    const options = {
        method: 'GET',
        url: 'https://flight-info-api.p.rapidapi.com/status',
        params: {
            version: 'v2',
            DepartureDateTime: departureDateTime,
            ArrivalDateTime: arrivalDatetime,
            CarrierCode: carrierCode,
            FlightNumber: flightNumber,
            DepartureAirport: departureAirport,
            ArrivalAirport: arrivalAirport,
            AircraftRegistrationNumber: aircraftRegNum,
            FlightType: flightType,
            CodeType: codeType,
            ServiceType: serviceType,
            After: after
        },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.API_HOST
        }
    };

    try {
	    const response = await axios.request(options);
	    return res.status(200).json(response.data);
    } catch (error) {
	    console.error('Error fetching flight data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = {
  searchFlights,
}

