import {create} from "zustand"

type TagTheme ={
    editNewTagStore:boolean,
    setEditNewStore: (editNewState:boolean) => void
}

export const NewTagStore = create<TagTheme> (
    (set) =>({
        editNewTagStore:false,
        setEditNewStore: (editNewState:boolean) => set(() => ({editNewTagStore:editNewState}))
    })
);