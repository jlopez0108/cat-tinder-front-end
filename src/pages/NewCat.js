import React from 'react';
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'


class NewCat extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})

}

handleNewCat = () =>{
    let {form} = this.state
    this.props.submitNewCat(form)
}
    render (){
        return(
            <div>
                <h1> hello again</h1>
                <Form>
                    <h3>name</h3>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.form.name}/>
                    <h3>age</h3>
                <Form.Control
                    type="text"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.form.age}/>
                    <h3>enjoys</h3>
                <Form.Control
                    type="text"
                    name="enjoys"
                    onChange={this.handleChange}
                    value={this.state.form.enjoys}/>
                </Form>
                <button onClick={this.handleNewCat}>Add New Cat</button>
            </div>
            )
    }
}

export default NewCat
