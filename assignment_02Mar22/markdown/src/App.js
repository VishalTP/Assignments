import React from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      value : "",
      loading:true
    }
    this. handleChange.bind(this)
  }
  handleChange = (e)=>{
    this.setState({value:e.target.value})
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 3000)
  }
  render(){
    if(this.state.loading)
      return(<h1>Loading...</h1>)
    return(
      <div className="App">
        <textarea onChange={this.handleChange}/>
        <ReactMarkdown className="preview" children={this.state.value}/>
      </div>
    )
  }
}

export default App;
