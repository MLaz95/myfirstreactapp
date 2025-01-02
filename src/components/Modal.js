function Modal({ newLink }){

    const linkName = document.getElementById('link-name');
    const linkUrl = document.getElementById('link-url');

    return(
        <form className="newLinkForm"
            onSubmit={(e) => {
                e.preventDefault();
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
            <button>Confirm</button>
        </form>
    )
}

export default Modal;