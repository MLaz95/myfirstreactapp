function Card({ link, index, deleteLink, emitDragStart }){

    const favIconUrl = 'https://s2.googleusercontent.com/s2/favicons?domain_url=' + link.url + '&sz=128';

    return(
        <div
            className='card'
            draggable
            onDragStart={e => emitDragStart(e, index)}
        >
            <a href={link.url} target="_blank">
                <div >
                    <img className="logo" src={favIconUrl} />
                    <p>{link.name}</p>
                </div>
            </a>
            <button
                onClick={() => {deleteLink(link)}}
                className='del-btn'
            >X</button>
        </div>
    );
}

export default Card;