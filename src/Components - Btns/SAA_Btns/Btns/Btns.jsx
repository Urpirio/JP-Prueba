'use client';
import { SAA_BtnDataBelow,SAA_BtnDataUnder } from "@/Components - Btns/Data/SAA_BtnsData"

export function BtnOver() {
    const ListBtn = SAA_BtnDataUnder.map(LU => {
        return(<button onClick={LU.function} className={LU.Style}>{LU.name}</button>)
    })
    return(ListBtn)
};

export function BtnBelow(){
    const ListBtn = SAA_BtnDataBelow.map(LB => {
        return(<button onClick={LB.function} className={LB.Style}>{LB.name}</button>)
    })
    return(ListBtn)
};
