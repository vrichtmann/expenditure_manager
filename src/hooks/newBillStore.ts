import {create} from "zustand"

type NewBillStore = {
    editBill:boolean,
    isEditMode:boolean,
    setBillStore: (editBillState:boolean) => void
    setIsEditMode: (isEditModeState:boolean) => void
}

export const newBillStore = create<NewBillStore>(
    (set) => ({
        editBill: false,
        isEditMode: false,
        setBillStore: (editBillState:boolean) => set(() => ({editBill:editBillState})),
        setIsEditMode: (isEditModeState:boolean) => set(() => ({isEditMode:isEditModeState})), 
    })
)