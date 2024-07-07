import * as React from 'react'

class CounterClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            name:"Abhijeet Rana",
            Age:23
        }

    }
    
    testing(){
        this.setState((prevState)=>({
            count : prevState.count+1
        }));
    }
    
    add(){
        this.setState({count:this.state.count+1})
    }
    componentDidMount(){
        console.log("Component did mount is called");
      }
      
      componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count){
          console.log("Component updated successfully")
        }
      }
      
      componentWillUnmount(){
        console.log("Component Unmounted Successfully!")
      }
    render(){
        const {name,age} = this.props;
        return <div>
            <h1>Hi, My name is {name} and my age is {age}. We are inside the class component now </h1>
            <h2>{JSON.stringify(this.state)}</h2>
            <button onClick={()=>this.add()}>Check</button>
            </div>
    }
}


export default CounterClass