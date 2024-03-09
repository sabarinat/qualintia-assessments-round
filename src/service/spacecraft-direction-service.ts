import  returnData   from '../direct-rule/directionPositionRule'
import  { Position, Direction, DirectionDats, RequestBody } from '../interface/spacecraft-direction.interface';
import { spaceposition, spacepositionNumbre } from '../service/spacecraft-position'
// find the position and direction of space craft
export const findPostionDistance: (req: RequestBody) => {position: number[], direction: string} = (req: RequestBody) => {
    let position: number[] = req.position;
       let movement: Position[] = req.movement;
    let directionPostion: Direction = 'N';
    let directionRules: DirectionDats  = returnData.returnData();
    for(let move of movement) {
        let posIndex = (directionPostion === 'E' || directionPostion === 'W') ? 0 :  (directionPostion === 'N' || directionPostion === 'S') ? 1 : 2;
        if(move === 'f' || move === 'b') {
         position[posIndex] += spacepositionNumbre(directionRules[directionPostion], move)
        } else {
          directionPostion = spaceposition(directionRules[directionPostion], move);
        }
    }
    const exactDirection: string = directionPostion.split('')[0];
    const positionDatas = {
       position: position,
       direction: exactDirection
    }
    return positionDatas
}
