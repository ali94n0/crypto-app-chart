import { CgClose } from "react-icons/cg";
import useOutboxClick from "../hooks/useOutboxClick";

const Modal = ({ onClose,children }) => {
    const boxRef = useOutboxClick(onClose)
    return (
        <div  className="flex items-center justify-center w-full h-screen fixed top-0 left-0 right-0 backdrop-blur-sm">
            <button onClick={onClose} className="fixed top-5 left-5">
                <CgClose className="w-10 h-10 text-red-500"/>
            </button>
            <div ref={boxRef} className="bg-neutral-700 p-4 rounded-md">{children}</div>
        </div>
    );
};

export default Modal;