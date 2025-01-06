function Card({ link, deleteLink }){

    const favIconUrl = 'https://s2.googleusercontent.com/s2/favicons?domain_url=' + link.url + '&sz=128';
    function openMenu(){
        console.log('yay');
    }

    return(
        <div>
            <a href={link.url} target="_blank">
                <div className='card'>
                    <img className="logo" src={favIconUrl} />
                    <p>{link.name}</p>
                </div>
            </a>
            <button onClick={() => {deleteLink(link)}}>Delete</button>
        </div>
    );
}

export default Card;