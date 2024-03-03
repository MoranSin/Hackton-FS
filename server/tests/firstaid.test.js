const request = require('supertest');
const app = require('../app');
const firstAidsRepository = require('../repositories/firstaid.repository');
const {ServerError} = require('../errors/errors');

jest.mock('../repositories/firstaid.repository');

// Get all firstAids test
describe('GET /firstAid', () => {
    beforeEach(() => jest.clearAllMocks());

    // Success 200
    it('should return all firstAids', async () => {
        const mockFirstAids = [{
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        },
            {
                "_id": "65e49c6195f6772b0b3c431b",
                "injuryType": "Burns",
                "description": "Burns occur when the skin is damaged by heat, electricity, chemicals, or radiation.",
                "instructions": [
                    "Cool the burn with cool, running water for at least 10 minutes.",
                    "Remove any clothing or jewelry near the burn (if it’s not stuck to the skin).",
                    "Cover the burn with a sterile gauze bandage or clean cloth.",
                    "Avoid applying ice, butter, or ointments to the burn.",
                    "Seek medical attention if the burn is severe or covers a large area of the body."
                ]
            }];

        firstAidsRepository.findInstructions.mockResolvedValue(mockFirstAids);

        const res = await request(app).get('/firstAids');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(mockFirstAids);
    });

    // Failure 404
    it('should return 404 when no firstAids are found', async () => {
        const mockFirstAids = [];
        firstAidsRepository.findInstructions.mockResolvedValue(mockFirstAids);

        const res = await request(app).get('/firstAids');
        expect(res.statusCode).toEqual(404);
    });

    // Failure 500
    it('should return 500 when an error occurs', async () => {
        firstAidsRepository.findInstructions.mockRejectedValue(new ServerError('internal server error'));

        const res = await request(app).get('/firstAids');
        expect(res.statusCode).toEqual(500);
    });
});

// Get firstAid by id
describe('GET /firstAids/:firstAidId', () => {
    beforeEach(() => jest.clearAllMocks());

    // Success 200
    it('should return firstAid with specific id', async () => {
        const mockFirstAids = [{
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        },
            {
                "_id": "65e49c6195f6772b0b3c431b",
                "injuryType": "Burns",
                "description": "Burns occur when the skin is damaged by heat, electricity, chemicals, or radiation.",
                "instructions": [
                    "Cool the burn with cool, running water for at least 10 minutes.",
                    "Remove any clothing or jewelry near the burn (if it’s not stuck to the skin).",
                    "Cover the burn with a sterile gauze bandage or clean cloth.",
                    "Avoid applying ice, butter, or ointments to the burn.",
                    "Seek medical attention if the burn is severe or covers a large area of the body."
                ]
            }];
        firstAidsRepository.retrieveInstruction.mockResolvedValue(mockFirstAids[0]);

        const res = await request(app).get('/firstAids/65e49c6195f6772b0b3c431a');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(mockFirstAids[0]);
    });

    // Failure 404
    it('should return 404 if id wasnt found', async () => {
        const mockFirstAids = [{
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        },
            {
                "_id": "65e49c6195f6772b0b3c431b",
                "injuryType": "Burns",
                "description": "Burns occur when the skin is damaged by heat, electricity, chemicals, or radiation.",
                "instructions": [
                    "Cool the burn with cool, running water for at least 10 minutes.",
                    "Remove any clothing or jewelry near the burn (if it’s not stuck to the skin).",
                    "Cover the burn with a sterile gauze bandage or clean cloth.",
                    "Avoid applying ice, butter, or ointments to the burn.",
                    "Seek medical attention if the burn is severe or covers a large area of the body."
                ]
            }];
        firstAidsRepository.retrieveInstruction.mockResolvedValue(mockFirstAids[14]);

        const res = await request(app).get('/firstAids/5f882587d4d1c02da0f64c8b');
        expect(res.statusCode).toEqual(404);
    });

    // Failure 400
    it('should return 400 if id isnt by the format', async () => {
        const mockFirstAids = [{
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        },
            {
                "_id": "65e49c6195f6772b0b3c431b",
                "injuryType": "Burns",
                "description": "Burns occur when the skin is damaged by heat, electricity, chemicals, or radiation.",
                "instructions": [
                    "Cool the burn with cool, running water for at least 10 minutes.",
                    "Remove any clothing or jewelry near the burn (if it’s not stuck to the skin).",
                    "Cover the burn with a sterile gauze bandage or clean cloth.",
                    "Avoid applying ice, butter, or ointments to the burn.",
                    "Seek medical attention if the burn is severe or covers a large area of the body."
                ]
            }];
        firstAidsRepository.retrieveInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).get('/firstAids/123');
        expect(res.statusCode).toEqual(400);
    });

    // Failure 500
    it('should return 500 when an error occurs', async () => {
        firstAidsRepository.retrieveInstruction.mockRejectedValue(new ServerError('internal server error'));

        const res = await request(app).get('/firstAids/5f882587d4d1c02da0f64c8b');
        expect(res.statusCode).toEqual(500);
    });
});

// Create new firstAid
describe('POST /firstAids', () => {
    beforeEach(() => jest.clearAllMocks());

    // Success 200
    it('should return 200', async () => {
        const mockFirstAids = {
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        };

        firstAidsRepository.createInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).post('/firstAids').send(mockFirstAids);
        expect(res.statusCode).toEqual(200);
    });

    // Failure 400
    it('missing argument - should return 400', async () => {
        const mockFirstAids = {};

        firstAidsRepository.createInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).post('/firstAids').send(mockFirstAids);
        expect(res.statusCode).toEqual(400);
    });

    // Failure 400
    it('empty request body - should return 400', async () => {
        const mockFirstAids = {};
        firstAidsRepository.createInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).post('/firstAids').send(mockFirstAids);
        expect(res.statusCode).toEqual(400);
    });
});

// Delete exiting firstAid
describe('DELETE /firstAids/:firstAidId', () => {
    beforeEach(() => jest.clearAllMocks());

    // Success 200
    it('should return deleted firstAid with specific id', async () => {
        const mockFirstAids = [{
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        },
            {
                "_id": "65e49c6195f6772b0b3c431b",
                "injuryType": "Burns",
                "description": "Burns occur when the skin is damaged by heat, electricity, chemicals, or radiation.",
                "instructions": [
                    "Cool the burn with cool, running water for at least 10 minutes.",
                    "Remove any clothing or jewelry near the burn (if it’s not stuck to the skin).",
                    "Cover the burn with a sterile gauze bandage or clean cloth.",
                    "Avoid applying ice, butter, or ointments to the burn.",
                    "Seek medical attention if the burn is severe or covers a large area of the body."
                ]
            }];
        firstAidsRepository.deleteInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).delete('/firstAids/65e49c6195f6772b0b3c431a');
        expect(res.statusCode).toEqual(200);
    });

    // Failure 404
    it('should return 404 if id wasnt found', async () => {
        firstAidsRepository.deleteInstruction.mockResolvedValue(null);

        const res = await request(app).delete('/firstAids/5f882587d4d1c02da0f64c8b');
        expect(res.statusCode).toEqual(404);
    });

    // Failure 400
    it('should return 400 if id isnt by the format', async () => {
        const mockFirstAids = [];
        firstAidsRepository.deleteInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).delete('/firstAids/1523');
        expect(res.statusCode).toEqual(400);
    });

    // Failure 500
    it('should return 500 when an error occurs', async () => {
        firstAidsRepository.deleteInstruction.mockRejectedValue(new ServerError('internal server error'));

        const res = await request(app).delete('/firstAids/5f882587d4d1c02da0f64c8b');
        expect(res.statusCode).toEqual(500);
    });
});

// Update exiting firstAid
describe('PUT /firstAids/:firstAidId', () => {
    beforeEach(() => jest.clearAllMocks());

    // Success 200
    it('should return updated firstAid with specific id', async () => {
        const mockFirstAids = {
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        };

        firstAidsRepository.updateInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).put('/firstAids/65c0c795c54499e0ac89cc18').send(mockFirstAids);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(mockFirstAids);
    });

    // Failure 404
    it('should return 404 if id wasnt found', async () => {
        const mockFirstAids = {
            "_id": "65e49c6195f6772b0b3c431a",
            "injuryType": "Cuts and Scrapes",
            "description": "Cuts and scrapes are common injuries that involve damage to the skin caused by sharp objects or abrasions.",
            "instructions": [
                "Clean the wound with soap and water.",
                "Apply pressure with a clean cloth to stop bleeding.",
                "Apply an antiseptic cream or ointment.",
                "Cover the wound with a sterile bandage or dressing.",
                "Seek medical attention if the wound is deep or shows signs of infection."
            ]
        };

        firstAidsRepository.updateInstruction.mockResolvedValue(null);

        const res = await request(app).put('/firstAids/5f882587d4d1c02da0f64c8b').send(mockFirstAids);
        expect(res.statusCode).toEqual(404);
    });

    // Failure 400
    it('should return 400 if id isnt by the format', async () => {
        const mockFirstAids = [];
        firstAidsRepository.updateInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).put('/firstAids/1523').send(mockFirstAids);
        expect(res.statusCode).toEqual(400);
    });

    // Failure 400
    it('empty request body - should return 400', async () => {
        const mockFirstAids = {};
        firstAidsRepository.updateInstruction.mockResolvedValue(mockFirstAids);

        const res = await request(app).put('/firstAids/5f882587d4d1c02da0f64c8b').send(mockFirstAids);
        expect(res.statusCode).toEqual(400);
    });
});