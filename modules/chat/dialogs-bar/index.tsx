import { DialogItem } from "../dialog"
import { DBWrapper } from "./views"


const DialogsBar = () => (
    <DBWrapper>
        <DialogItem />
    </DBWrapper>
)

export {DialogsBar}