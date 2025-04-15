'use client';
import { NavBlock_BtnData } from "../Data/NavBlock_BtnData"


export const BtnNavBlock = () => {
    const listBtns = NavBlock_BtnData.map(NV => {
        return(
            <button key={NV.key} onClick={NV.function} className={NV.style}>{NV.name}</button>
        )
    })
    return(listBtns)
};
