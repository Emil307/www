import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

const Item = styled.div`
  border: 1px #000 solid;
  width: 100%;
`

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getPosts() {
    try {
      setLoading(true);
      const API = 'https://jsonplaceholder.typicode.com';
  
      const response = await axios.get(`${API}/posts`);
      setPosts(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (<>
    <Container>
      {error ? <p>{error}</p> : <></>}
      {loading ? <p>Loading...</p> :
        <>
          {posts.map(post =>
            <Item key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Item>  
          )}
        </>
      }
    </Container>
  </>)
}

export default App;
