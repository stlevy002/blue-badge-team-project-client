import React, {
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Container
} from 'reactstrap'
import TextField from '@material-ui/core/TextField';


const SearchBar = () => {
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState('');

    const fetchMovies = (e) => {
        e.preventDefault()

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=65d9c3086f4362bdc122a7ed7a6d2074&language=en-US&query=${search}&page=1&include_adult=false`)
        //Will need to put in your own API Key
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    return (
        <Container id='homeWrapper'>
            <Row className='searchField'>
                <Col>
                    <form>
                        <TextField id="standard-search" label="Search field" type="search" onChange={(e) => setValue(e.target.value)} />
                    </form>
                    <div>
                        <p>Start your search here!</p>
                    </div>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    {/* put all movie data here */}
                </Col>
            </Row>
        </Container>






    )
}

export default SearchBar