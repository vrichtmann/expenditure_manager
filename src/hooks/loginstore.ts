import {create} from "zustand";

type LoginState ={
    logged:boolean,
    setLogged: (loggedState:boolean) => void
}

export const loginStore = create<LoginState>(
    (set) =>(
        {
            logged:true,
            setLogged: (loggedState: boolean) => set(() => ({logged:loggedState}))
        }
    )
);