import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    // Detail Component가 Mount되었을 때
    componentDidMount() {
        // props를 사용하기 편리하게 구조분해할당으로 정의하고
        const { location, history } = this.props;
        console.log(location);
        // location.state 값이 전달되지 않은경우 '/'으로 Redirect한다.
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        // componentDidMount(); 보다 render(); 가 먼저 호출되므로 render(); 에서도 props check가 필요하다.
        if (location.state === undefined) { return null; }

        return (
            <div className="detail">
            <span>
                <h3>Title<br/>{ location.state.title }</h3>
                <h5>Summary<br/>{ location.state.summary }</h5>
                <h5>Year<br/>{ location.state.year }</h5>
            </span>
            </div>
        );
    }
}

export default Detail;