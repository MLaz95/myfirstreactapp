function NewCardButton({isModalOpen, setModalOpen}) {

    function openModal(){
        if(!isModalOpen){
            setModalOpen(true)
            console.log('Modal Open!')
        }
    }

    return(
        
        <div
        onClick={openModal}
        className='card add'
        >
            <div className="logo"></div>
            <p>Add New</p>
        </div>
        
    )
}

export default NewCardButton;