import './App.scss';
import  NavbarComponent  from './components/Navbar/NavbarComponent';
import { Main } from './components/Main/Main';
import { NotFound } from './components/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';
import { UpdateArc } from './components/AddArc/UpdateArc';
import { AddNewArc } from './components/AddArc/AddNewArc';
import { GetName } from './components/inputName/GetName';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={GetName} />
        <Route path="/getname" component={GetName} />
        <Route path="/arclanguage" component={Main} />
        <Route path="/editarclan/arcId=:arcId" component={UpdateArc} />
        <Route path="/addarc" component={AddNewArc} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
