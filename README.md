# Flight Search API

Welcome to the Flight Search API project! This API allows you to search for flight information based on specific parameters such as departure airport, arrival airport, and date. It utilizes a freely available flight search API to fetch flight data and provide relevant information to users.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

Clone this repository to your local machine:

    ```sh
        git clone https://github.com/your-username/flight-search-api.git
    ```

Navigate to the project directory:

    ```sh
        cd flight-search-api
    ```

Install the dependencies:

    ```sh
        npm install
    ```

Start the server:

    ```sh
        npm run dev
    ```

### Usage

Use your preferred API testing tool (e.g., Postman) or a web browser to make requests to the following endpoint:

- GET http://localhost:3000/api/search-flights

Query parameters:

- departureAirport (optional): Departure airport code (e.g., LAX)
- arrivalAirport (optional): Arrival airport code (e.g., JFK)
- departureDateTime or arrivalDateTime (at least one is mandatory): Departure or Arrival Date of the flight (e.g., 2020-08-16T00:00)
- flightNumber (optional): Flight number (e.g., ABC123)
- carrierCode (optional): Carrier code (e.g., AA)
- codeType (mandatory only if either `departureAirport`, `arrivalAirport`, or both are provided): Code type for carriers and airport (e.g., IATA, ICAO, FAA)
- aircraftRegNum (optional): Aircraft registration number (Tail Number)
- flightType (optional): Type of flight: Scheduled, Unscheduled, General Aviation (GA). Accepts comma separated values.
- serviceType (optional): Type of service: Passenger, Cargo. Only flights for the specified service type are returned if specified. Accepts comma separated values.
- after (optional): A cursor after refers to a random string of characters which marks a specific item in a list of data.

Receive flight data in the response in JSON format.
example request:
- GET http://localhost:3000/api/search-flights?departureDateTime=2020-08-16T00:00

example result:
```json
{
    "data": [
        {
            "carrier": {
                "iata": "DG"
            },
            "serviceSuffix": "",
            "flightNumber": 5941,
            "sequenceNumber": 1,
            "flightType": "Scheduled",
            "departure": {
                "airport": {
                    "iata": "MNL",
                    "icao": "RPLL"
                },
                "terminal": "",
                "date": {
                    "local": "2020-08-16"
                },
                "time": {
                    "local": "06:00"
                }
            },
            "arrival": {
                "airport": {
                    "iata": "BXU",
                    "icao": "RPME"
                },
                "terminal": "",
                "date": {
                    "local": "2020-08-16"
                },
                "time": {
                    "local": "08:25"
                }
            },
            "elapsedTime": 0,
            "aircraftType": {
                "iata": "ATF"
            },
            "serviceType": {
                "iata": "F"
            },
            "segmentInfo": {
                "numberOfStops": 0,
                "intermediateAirports": {
                    "iata": []
                }
            },
            "codeshare": {
                "jointOperationAirlineDesignators": [],
                "marketingFlights": []
            },
            "scheduleInstanceKey": "b94cf67dc27d2792a27c0d1d32f8ead848a7736b9a073a9c5c7d0963106e5cfb",
            "statusKey": "f96a3fbe900483e49b565fe1a16fbc01a92a2fb6705c0f314231ba13fda43d7c",
            "statusDetails": []
        },
        ...
    ]
}
```


