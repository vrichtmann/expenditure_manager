import {create} from "zustand"

type ThemeState = {
    editThemePopup:boolean,
    themeName:string,
    bill:number,
    color:string,
    bgColor:string,
    setEditThemePopup: (editThemePopupState:boolean) => void,
    setThemeName: (themeNameState:string) => void,
    setBill: (billState:number) => void,
    setColor: (colorState:string) => void,
    setBgColor: (bgColorState:string) => void
}

export const themeStore = create<ThemeState>(
    (set) => ({
        editThemePopup: false,
        themeName:"",
        bill:0,
        color: "",
        bgColor:"",
        setEditThemePopup: (editThemePopupState:boolean) => set(() => ({editThemePopup:editThemePopupState})),
        setThemeName: (themeNameState:string) => set(() => ({themeName:themeNameState})),
        setBill: (billState:number) => set(() => ({bill:billState})),
        setColor: (colorState:string) => set(() => ({color:colorState})),
        setBgColor: (bgColorState:string) => set(() => ({bgColor:bgColorState}))
    })
);