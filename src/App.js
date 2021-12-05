import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import  content  from './Content';
import BlogPost from './BlogPost'
import Home from './Home'
import NavMain from './Nav'
import Footer from './Footer'
import Authors from './Authors'




function App() {
  console.log(content)
  return (
    <>
      <NavMain/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/blogpost/:index'>
        <BlogPost blogInfo={content}/>
      </Route>
      <Route path='/Authors'>
        <Authors/>
      </Route>
      <Footer/>
    </>
  )
}

export default App;
