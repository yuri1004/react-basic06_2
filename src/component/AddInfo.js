import {BiTrashAlt} from 'react-icons/bi';

export default function AddInfo({info,onDelete}){
    // console.log(info)
    return(
        <li>
        <dl>
            <dt>{info.petName}</dt>
            <dd>
                <dfn>{info.ownerName}</dfn>
            </dd>
            <dd>{info.aptNotes}</dd>
            <dd>{info.aptDate}</dd>
        </dl>
        <button type="button"
                onClick={()=>onDelete(info.id)}>
            <BiTrashAlt />
        </button>
    </li>
    )
}