import  { SpaceDirection, Direction, PositionTurn, PositionMove } from '../interface/spacecraft-direction.interface'

// return the position for respective movement
export const spaceposition :(details: SpaceDirection, position: PositionTurn) => (Direction) = (details: SpaceDirection, position: PositionTurn) => {
    return details[position];
}

// retrun the value for forward or backward
export const spacepositionNumbre :(details: SpaceDirection, position: PositionMove) => (number) = (details: SpaceDirection, position: PositionMove) => {
    return details[position];
}

export default {
    spaceposition: spaceposition,
    spacepositionNumbre: spacepositionNumbre
}