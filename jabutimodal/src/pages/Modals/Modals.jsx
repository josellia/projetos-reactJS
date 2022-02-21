import { FaEye } from "react-icons/fa";
import AnimateModalSimple from "../../components/AnimateModalSimple/AnimateModalSimple";
import './Modals.scss';

const Modals = () => {
    const icon = FaEye;
    return(
        <div className="modal-container">
            <AnimateModalSimple title="Modal Title" content="Modal Content Here"/>
            text
         <FaEye/>
        </div>
    )
}

export default Modals;