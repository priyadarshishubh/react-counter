import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        imageUrl: 'http://picsum.photos/200',
        tags: ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    };

    renderTags(){
        if( this.state.tags.length === 0 ) 
        {return <p>There are no tags</p>};
        /* const printThis = "Correct way to print a string\n"; */
        return (<div><ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{/*
        <p>Remember this method is just like the one in java 
            so this will not work. Javascript inside method, 
            instead same thing should be done as shown below. 
            Try to run with or without a semicolon interestingly 
            nothing will happen code will run as normal</p> */}
            </div>/* ,printThis */);
    }

    /* events do not take any parameter(like 
    onClick={this.handleIncrement } ['()' cannot be used] used here),
    so one way to pass a parameter is shown below
    doHandleIncrements = (/with no arguments/) => {
        this.handleIncrement(parameter); //argument can be passed here
    because actually its just function passed to () function 
    be it with no arguments or some argument. So it means we are 
    passing onClick={this.doHandleIncrement} it does not have an 
    argument.
    }; and then 
    handleIncrement = (parameter) => {
        console.log(parameter);
    } */

    /* But instead of doing like this we will directly give () to 
    () to onClick listener like 
    onClick= () => this.handleIncrement(Parameter) see the code. */

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1})
        /* 'this':(only in javascript)
        will return reference to an object in a object.method & 
        reference to windows object in stand-alone function in this
        if strict mode is enabled then it will return undefined. 
        But 'this' is defined in side a constructor after a super
        method so inside a constructor(as shown below) and so we can use bind 
        method which is defined in the Component, to bind 'this' 
        keyword to 'this' defined inside the respective no matter 
        where the keyword is called. But this is big so use the =>(arrow)
        keyword instead & and remember => does not rebind this 
        keyword they inherit it.
        (But last technique is experimental and maybe removed in future) */
    };

    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    } */

    render() {

        console.log('props', this.props);
        //The difference between state & prop is that state is local and prop is global.
        //Remember prop is permanent, it cannot change. To change some property pass it to a state.
        return (
        <div >
            {this.props.children};
            <img src={this.state.imageUrl} alt=""/>
            <h1>Ok Boomer!</h1>
            <span style = {this.styles} className={this.getBadgeClasses()}>
                {this.formatCount()}</span>
            <button onClick= {() => this.handleIncrement({id: 1})}
            className="btn btn-secondary btn-sm">
            Increment
            </button>
            <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            { this.renderTags()}
            {"This is another way fo printing inside javascript or jsx file"}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0? 'Zero' : value;
    }
}
 
export default Counter;




/* true && 'Hi' && 0
0
true && 'Hi' && 1
1
true && 'Hi' && 0 && false
0
true && 'Hi' && false
false */