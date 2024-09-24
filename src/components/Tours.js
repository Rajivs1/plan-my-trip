import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Pl&#225;n M&#253; Tr&#237;p</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
            <footer>Made with <span className='heart'>&#10084;</span> by Rajiv &#128526;</footer>  
        </div>
    );
}

export default Tours;