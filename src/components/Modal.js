function Modal({ newLink, isModalOpen, setModalOpen }){

    if(isModalOpen){
        return(
            <form className="newLinkForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    //target[0] = link-name
                    //target[1] = link-url
                    newLink(e.target[0].value, e.target[1].value)
                }}
            >
                <div>
                    <label htmlFor='link-name'>Name</label>
                    <input id="link-name" type="text" />
                </div>
                <div>
                    <label htmlFor='link-url'>Url</label>
                    <input id="link-url" type="text" />   
                </div>
                <button type="submit">Confirm</button>
                <button type="button" onClick={() => setModalOpen(false)}>Close</button>
            </form>
        )
    }
}

export default Modal;