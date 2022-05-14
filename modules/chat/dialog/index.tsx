import { characters } from "../mock"
import { DWrapper, ItemWrapper } from "./views"

console.log(characters)

const DialogItem = () => (
    <DWrapper>
    {characters.map(c => (
        <ItemWrapper>
            <img src={c.photo} width={40} height={40} />
            {c.name}
        </ItemWrapper>
         

        
    ))}
    </DWrapper>
)

export {DialogItem}