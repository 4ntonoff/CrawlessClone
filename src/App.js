import styled from 'styled-components'
import Navbar from "./components/Tabbar"
import ProfileData from './components/ProfileData';
import EdgeButton from "./components/EdgeButton"


function App() {
  return (
    <Container>
      <TabPanel>
        <Navbar/>
        <EdgeButton/>
        <ProfileData/>
      </TabPanel>
    </Container>
  );
}
const Container = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #151515;
  border-radius: 5px;
`
const TabPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 48px;
  gap: 20px;
  border-color: grey;
  border-width: 0.5px;
  border-right-style: solid;
`

export default App;
