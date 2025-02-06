import { TbUserSearch } from "react-icons/tb";
import s from "./SearchBox.module.css"

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={s.info}>
            <p className={s.text}>Find contacts by name</p>
            <div className={s.label}>
            <TbUserSearch size="22"/>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            </div>
        </div>
    )
}

export default SearchBox;