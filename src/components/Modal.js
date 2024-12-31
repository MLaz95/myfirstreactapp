function Modal(){
    function setLink(){
        const nameEl = document.getElementById('link-name');
        const nameUrl = document.getElementById('link-url');
        console.log('name', nameEl.value)
        console.log('nameUrl', nameUrl.value)
        localStorage.setItem('links',)
    }

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
            <button >Confirm</button>
        </div>
    )
}

export default Modal;