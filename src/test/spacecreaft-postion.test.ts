import 'jest';
import { spaceposition, spacepositionNumbre } from '../service/spacecraft-position';
import  { returnData }   from '../direct-rule/directionPositionRule'

describe('Turn method', () => {
    beforeAll(async () => {
    })
    it('Current position North need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['N'], 'r')
        expect(ingredientsFound).toEqual('E')
    })
    it('Current position North need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['N'], 'l')
        expect(ingredientsFound).toEqual('W')
    })
    it('Current position North need to turn UP', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['N'], 'u')
        expect(ingredientsFound).toEqual('UN')
    })
    it('Current position North need to turn DOWN', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['N'], 'd')
        expect(ingredientsFound).toEqual('DN')
    })
    it('Current position South need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'r')
        expect(ingredientsFound).toEqual('W')
    })
    it('Current position South need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'l')
        expect(ingredientsFound).toEqual('E')
    })
    it('Current position South need to turn UP', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'u')
        expect(ingredientsFound).toEqual('US')
    })
    it('Current position South need to turn DOWN', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'd')
        expect(ingredientsFound).toEqual('DS')
    })
    it('Current position East need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['E'], 'r')
        expect(ingredientsFound).toEqual('S')
    })
    it('Current position East need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['E'], 'l')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position East need to turn UP', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['E'], 'u')
        expect(ingredientsFound).toEqual('UE')
    })
    it('Current position East need to turn DOWN', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['E'], 'd')
        expect(ingredientsFound).toEqual('DE')
    })
    it('Current position West need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['W'], 'r')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position West need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['W'], 'l')
        expect(ingredientsFound).toEqual('S')
    })
    it('Current position West need to turn UP', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['W'], 'u')
        expect(ingredientsFound).toEqual('UW')
    })
    it('Current position West need to turn DOWN', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['W'], 'd')
        expect(ingredientsFound).toEqual('DW')
    })
    it('Current position UP with Face North need to turn Left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UN'], 'l')
        expect(ingredientsFound).toEqual('W')
    })
    it('Current position UP with Face North need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UN'], 'r')
        expect(ingredientsFound).toEqual('E')
    })
    it('Current position UP with Face East need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UE'], 'l')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position UP with Face East need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UE'], 'r')
        expect(ingredientsFound).toEqual('S')
    })
    it('Current position UP with Face South need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['US'], 'r')
        expect(ingredientsFound).toEqual('W')
    })
    it('Current position UP with Face South need to turn Left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['US'], 'l')
        expect(ingredientsFound).toEqual('E')
    })
    it('Current position UP with Face West need to turn Left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UW'], 'l')
        expect(ingredientsFound).toEqual('S')
    })
    it('Current position UP with Face West need to turn Right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['UW'], 'r')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position DOWN with Face West need to turn Right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['DW'], 'r')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position DOWN with Face South need to turn left', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['DE'], 'l')
        expect(ingredientsFound).toEqual('N')
    })
    it('Current position DOWN with Face South need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['DE'], 'r')
        expect(ingredientsFound).toEqual('S')
    })
})

describe('Move Methods', () => {
    beforeAll(async () => {
    })
    it('Current position North need to move forward', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['N'], 'f')
        expect(ingredientsFound).toEqual(1)
    })
    it('Current position North need to move backword', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['N'], 'b')
        expect(ingredientsFound).toEqual(-1)
    })
    it('Current position South need to move forward ', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['S'], 'f')
        expect(ingredientsFound).toEqual(-1)
    })
    it('Current position South need to move backword', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['S'], 'b')
        expect(ingredientsFound).toEqual(1)
    });
    it('Current position UP need to move forward', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['UN'], 'f')
        expect(ingredientsFound).toEqual(1)
    });
    it('Current position Down need to move forward', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['DN'], 'f')
        expect(ingredientsFound).toEqual(-1)
    });
    it('Current position UP need to move backward', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['UN'], 'b')
        expect(ingredientsFound).toEqual(-1)
    })
    it('Current position DOWN need to move backward', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['DN'], 'b')
        expect(ingredientsFound).toEqual(1)
    })

})
