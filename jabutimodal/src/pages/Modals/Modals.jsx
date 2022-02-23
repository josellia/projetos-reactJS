import { FaEye } from "react-icons/fa";
import AnimateModalSimple from "../../components/AnimateModalSimple/AnimateModalSimple";
import "./Modals.scss";

const Modals = () => {
  return (
    <div className="modal-container">
      <h4>Simple modal</h4>
      <div className="modal-container__main">
        <AnimateModalSimple
          title="Modal Title"
          content="Modal Content Here"
          bgColorModalOpen="#ff007f"
          titleButton="Open modal"
        />

        <AnimateModalSimple
          icon={<FaEye color="#fff" size={20} />}
          title="Modal Title"
          content="Modal Content Here"
          bgColorModalOpen="transparent"
          bgHeader="blue"
        />
      </div>
    </div>
  );
};

export default Modals;
