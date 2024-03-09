import { DirectionDats } from '../interface/spacecraft-direction.interface'
export const returnData: () => DirectionDats = () => {
   let data: DirectionDats = {
    "N": {
        "f": 1,
        "b": -1,
        "l": "W",
        "r": "E",
        "u": "UN",
        "d": "DS" 
    },
    "S": {
        "f": -1,
        "b": 1,
        "l": "E",
        "r": "W",
        "u": "US",
        "d": "DN" 
    },
    "E": {
        "f": 1,
        "b": -1,
        "l": "N",
        "r": "S",
        "u": "UE",
        "d": "DW" 
    },
    "W": {
        "f": -1,
        "b": 1,
        "l": "S",
        "r": "N",
        "u": "UW",
        "d": "DE" 
    },
    "UN": {
        "f": 1,
        "b": -1,
        "l": "W",
        "r": "E",
        "u": "UN",
        "d": "DS"  
    },
    "US": {
            "f": 1,
            "b": -1,
            "l": "E",
            "r": "W",
            "u": "US",
            "d": "DN" 
    },
    "UE": {
        "f": 1,
        "b": -1,
        "l": "N",
        "r": "S",
        "u": "UE",
        "d": "DW"
    },
    "UW" : {
        "f": 1,
        "b": -1,
        "l": "S",
        "r": "N",
        "u": "UW",
        "d": "DE"
    }, 
    "DN":{
        "f": -1,
        "b": 1,
        "l": "E",
        "r": "W",
        "u": "US",
        "d": "DN" 
    }, 
    "DS": {
        "f": -1,
        "b": 1,
        "l": "W",
        "r": "E",
        "u": "UN",
        "d": "DS"  
    },
    "DE" : {
        "f": -1,
        "b": 1,
        "l": "S",
        "r": "N",
        "u": "UW",
        "d": "DE"
    },
    "DW": {
        "f": -1,
        "b": 1,
        "l": "N",
        "r": "S",
        "u": "UE",
        "d": "DW"
    }

}
return data
 }

// containf the rules of movement from resepective current movement
export default  {
    returnData: returnData
}