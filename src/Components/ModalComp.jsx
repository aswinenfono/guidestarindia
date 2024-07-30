import React from 'react'
import Modal from 'react-modal';
const ModalComp = ({ afterOpenModal, closeModal, children, modalIsOpen, width }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: width,
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backdropFilter: 'blur(3px)', // Apply a blur effect
            backgroundColor: 'rgba(255, 255, 255, 0.0)', // Transparent background
        },
    };

    Modal.setAppElement('#root');
    console.log(modalIsOpen)
    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <>
                        {children}
                    </>

                </Modal>
            </div>
        </>
    )
}

export default ModalComp