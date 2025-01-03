import styles from "../styles/Modal.module.css";

function Modal({ newLink, isModalOpen, setModalOpen }){

    if(isModalOpen){
        return(
            <div className={styles.modal}>
                <h3>Add a new shortcut</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        //target[0] = link-name
                        //target[1] = link-url
                        newLink(e.target[0].value, e.target[1].value)
                    }}
                >
                    <div className={styles.input}>
                        <label htmlFor='link-name'>Name</label>
                        <input id="link-name" type="text" />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='link-url'>Url</label>
                        <input id="link-url" type="text" />   
                    </div>
                    <div className={styles.buttons}>
                        <button type="submit">Confirm</button>
                        <button type="button" onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Modal;