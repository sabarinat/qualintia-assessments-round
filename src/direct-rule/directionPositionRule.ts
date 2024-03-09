import { DirectionDats } from '../interface/spacecraft-direction.interface'
export const returnData: () => DirectionDats = () => {
   let data: DirectionDats = {
    "N": {
        "f": 1,
        "b": -1,
        "l": "W",
        "r": "E",
        "u": "UN",
        "d": "DN" 
    },
    "S": {
        "f": -1,
        "b": 1,
        "l": "E",
        "r": "W",
        "u": "US",
        "d": "DS" 
    },
    "E": {
        "f": 1,
        "b": -1,
        "l": "N",
        "r": "S",
        "u": "UE",
        "d": "DE" 
    },
    "W": {
        "f": -1,
        "b": 1,
        "l": "S",
        "r": "N",
        "u": "UW",
        "d": "DW" 
    },
    "UN": {
        "f": 1,
        "b": -1,
        "l": "W",
        "r": "E",
        "u": "UN",
        "d": "N"  
    },
    "US": {
            "f": 1,
            "b": -1,
            "l": "E",
            "r": "W",
            "u": "US",
            "d": "S" 
    },
    "UE": {
        "f": 1,
        "b": -1,
        "l": "N",
        "r": "S",
        "u": "UE",
        "d": "E"
    },
    "UW" : {
        "f": 1,
        "b": -1,
        "l": "S",
        "r": "N",
        "u": "UW",
        "d": "W"
    }, 
    "DN":{
        "f": -1,
        "b": 1,
        "l": "W",
        "r": "E",
        "u": "N",
        "d": "DN" 
    }, 
    "DS": {
        "f": -1,
        "b": 1,
        "l": "E",
        "r": "W",
        "u": "S",
        "d": "DS"  
    },
    "DE" : {
        "f": -1,
        "b": 1,
        "l": "N",
        "r": "S",
        "u": "E",
        "d": "DE"
    },
    "DW": {
        "f": -1,
        "b": 1,
        "l": "S",
        "r": "N",
        "u": "W",
        "d": "DW"
    }

}
return data
 }

// containf the rules of movement from resepective current movement
export default  {
    returnData: returnData
}