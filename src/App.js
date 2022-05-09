import './App.css';
import Carlist from './components/Carlist';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Appbar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            My Carshop
          </Typography>
        </Toolbar>
      </Appbar>
      <Carlist />  
    </div>
  );
}
export default App;
