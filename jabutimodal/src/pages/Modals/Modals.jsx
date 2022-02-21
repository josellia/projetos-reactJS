import { FaEye } from "react-icons/fa";
import AnimateModalSimple from "../../components/AnimateModalSimple/AnimateModalSimple";
import "./Modals.scss";

const Modals = () => {
  return (
    <div className="modal-container">
      <AnimateModalSimple
        icon={<FaEye color="red" />}
        title="Modal Title"
        content="Modal Content Here"
        bgColorModalOpen="transparent"
        // titleButton="Open modal"
      />
    </div>
  );
};

export default Modals;
