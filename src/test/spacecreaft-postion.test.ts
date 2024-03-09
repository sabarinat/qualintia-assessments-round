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
    it('Current position North need to turn right fail cases', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['N'], 'r')
        expect(ingredientsFound).toEqual('E')
    })
    it('Current position South need to turn right', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'r')
        expect(ingredientsFound).toEqual('W')
    })
    it('Current position South need to turn UP', async () => {
        const data = returnData();
        const ingredientsFound = spaceposition(data['S'], 'u')
        expect(ingredientsFound).toEqual('US')
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
    it('Current position North need to turn forward fail cases', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['N'], 'f')
        expect(ingredientsFound).toEqual(1)
    })
    it('Current position South need to turn forward Succes cases', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['S'], 'f')
        expect(ingredientsFound).toEqual(-1)
    })
    it('Current position South need to turn forward fail cases', async () => {
        const data = returnData();
        const ingredientsFound = spacepositionNumbre(data['S'], 'f')
        expect(ingredientsFound).toEqual(-1)
    })

})
