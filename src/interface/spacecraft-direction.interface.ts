
export interface SpaceDirection {
    f: number,
    b: number,
    u: Direction,
    d: Direction,
    r: Direction,
    l: Direction
}


export interface DirectionDats {
     N: SpaceDirection,
     S: SpaceDirection,
     E:SpaceDirection,
     W: SpaceDirection,
     UN: SpaceDirection,
     UE: SpaceDirection,
     UW: SpaceDirection,
     US: SpaceDirection,
     DE: SpaceDirection,
     DW: SpaceDirection,
     DN: SpaceDirection,
     DS: SpaceDirection,
}
export interface RequestBody {
    position: number[],
    movement: Position[]
}

export type Direction = "N"|"S"|"E"|"W"|"UN"|"US"|"UE"|"UW"|"DS"|"DN"|"DW"|"DE" ;
export type Position = "f"|"b"|"u"|"d"|"r"|"l";
export type PositionTurn = "u"|"d"|"r"|"l";
export type PositionMove = "f"|"b";