function Card({link}){

    const favIconUrl = 'https://s2.googleusercontent.com/s2/favicons?domain_url=' + link.url + '&sz=128';

    return(
        <a href={link.url} target="_blank">
            <div className='card'>
                <img className="logo" src={favIconUrl} />
                <p>{link.name}</p>
            </div>
        </a>
    );
}

export default Card;