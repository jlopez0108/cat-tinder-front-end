import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, NavItem } from 'reactstrap'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './pages/Header'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cats:[
              {
                id: 1,
                name: 'Morris',
                age: 2,
                enjoys: "Long walks on the beach."
              },
              {
                id: 2,
                name: 'Paws',
                age: 4,
                enjoys: "Snuggling by the fire."
              },
              {
                id: 3,
                name: 'Mr. Meowsalot',
                age: 12,
                enjoys: "Being in charge."
              }
          ]
        }
    }


    submitNewCat = (form) =>{
        const { cats } = this.state
        let newcat = { id: cats.length +1,
                        name: form.name,
                        age: form.age,
                        enjoys: form.enjoys
                    }
        this.setState({
            cats : cats.push(newcat)
        })
        console.log(form)
        console.log(newcat)
        console.log(cats)
    }



    render() {
        const { cats } = this.state
        return (
            <div>

                <Router>

                    <Navbar>
                        <NavItem>
                        <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/cats">Cats</Link>
                        </NavItem>
                        <NavItem>
                        <Link to="/pages/newcat">New Cat</Link>
                        </NavItem>
                    </Navbar>

                    <Header />

                    <Switch>
                        <Route
                            exact path="/pages/cats"
                            render={(props) =>
                                <Cats cats={ this.state.cats } />
                            }
                        />

                        <Route
                            exact path="/pages/newcat"
                            render={(props) =>
                                <NewCat newcat={ this.state.newcats } submitNewCat={this.submitNewCat} />
                            }
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
