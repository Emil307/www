import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

const Item = styled.div`
  padding: 10px;
  border: 1px #000 solid;
  width: 360px;
`

const Bottom = styled.div``

const Cost = styled.span``

const Button = styled.button``

function App() {
  return (<>
    <Container>
      <Item>
        <img src="" alt="" />
        <h2>Рубашка</h2>
        <p>ОЛАУОАыОШАУЫОШауы</p>
        <div>
          <span>$450</span>
          <button>купить</button>
        </div>
      </Item>
    </Container>
  </>)
}

export default App;
