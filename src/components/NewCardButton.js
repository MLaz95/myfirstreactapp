function NewCardButton({ isModalOpen, setModalOpen }) {

    function openModal() {
        if (!isModalOpen) {
            setModalOpen(true)
            console.log('Modal Open!')
        }
    }

    return (

        <div
            onClick={openModal}
            className='new-btn'
        >
            {/* <div className="logo"></div> */}
            <p>New Link</p>
        </div>

    )
}

export default NewCardButton;