import 'jest';
import {findPostionDistance} from '../service/spacecraft-direction-service';
import  { RequestBody } from '../interface/spacecraft-direction.interface';


describe('Turn method', () => {
    beforeAll(async () => {
    })
    it('expect position and direction of spacecraft', async () => {
        const payload: RequestBody = { "position": [0, 0, 0],
                         "movement":["f", "r", "u", "b", "r"]}
        const output = findPostionDistance(payload);
        let outputPayload = {
                             "position": [0,1,-1],
                             "direction": "S"
                            }
        expect(output).toEqual(outputPayload)
    })
})