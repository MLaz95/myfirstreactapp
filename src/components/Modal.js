function Modal({ newLink }){

    const linkName = document.getElementById('link-name');
    const linkUrl = document.getElementById('link-url');

    return(
        <div className="newLinkForm">
            <div>
                <label htmlFor='link-name'>Name</label>
                <input id="link-name" type="text" />
            </div>
            <div>
                <label htmlFor='link-url'>Url</label>
                <input id="link-url" type="text" />   
            </div>
            <button 
                
            >Confirm</button>
        </div>
    )
}

export default Modal;