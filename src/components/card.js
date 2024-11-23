function Card({link}){
    return(
        <a href={link.url}>
            <div className='card'>
                <img className="logo" src="https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200" />
                <p>{link.name}</p>
            </div>
        </a>
    );
}

export default Card;