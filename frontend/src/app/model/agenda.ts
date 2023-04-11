import { Pompe } from "./pompe"
import { puit } from "./puit"

export class Agenda {
    
    _id : Number | undefined
    date_debut : String | undefined
    date_fin : String | undefined
    type : String | undefined
    puit: puit | undefined
    pompe: Pompe | undefined
}