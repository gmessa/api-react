import React, {useState} from "react";
import Modal from "./components/Modal";

const Pdf = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
    <div className="btPdf">
        <button onClick={() => setIsModalVisible (true)}>Modal</button>
        {isModalVisible ?  (
        
        <Modal onClose={() => setIsModalVisible (false) }>
        <div >
            <iframe title="pdf" src="../pdfs/pdfaqv.pdf"></iframe>
            </div>  
        </Modal>
        ) :null}
    </div>
    )
    
    
}

export default Pdf;