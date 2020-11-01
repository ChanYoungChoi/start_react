import React , { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    state = {
        number : 0
    }

    static defaultProps = {
        name:"default name"
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired // 필수적으로 전재해야 하며, 숫자입니다.
    }

    render(){
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name}입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자: {this.state.number}</p>
            <button onClick={() =>{
                this.setState({
                    number: this.state.number + 1
                })
            } }>클릭하셈</button>
            </div>
        )
    }
}


export default MyComponent;