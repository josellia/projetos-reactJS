import { FaEye } from "react-icons/fa";
import AnimateModalSimple from "../../components/AnimateModalSimple/AnimateModalSimple";
import "./Modals.scss";

const Modals = () => {
  return (
    <div className="modal-container">
        <h4>Simple modal</h4>
      <AnimateModalSimple
        icon={<FaEye color="purple" />}
        title="Modal Title"
        content="Modal Content Here"
        bgColorModalOpen="transparent"
       
      />
         <AnimateModalSimple
      
        title="Modal Title"
        content="Modal Content Here"
        bgColorModalOpen="#ff007f"
        titleButton="Open modal"
      />
    </div>
  );
};

export default Modals;
