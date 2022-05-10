import './App.css';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Afm_1 from './Dynamic/Afm_1';
import Afm_2 from './Dynamic/Afm_2';
import Afm_3 from './Dynamic/Afm_3';
import JsonEform from './Dynamic/JsonEForm'
import Afm from './Dynamic/Afm';
import Pagination from './Dynamic/Pagination/Pagination';
import PaginationData from './Dynamic/Pagination/PaginationData';


function App() {
  return (
    <div>
      <PaginationData/>
    </div>
  );
}

export default App;
