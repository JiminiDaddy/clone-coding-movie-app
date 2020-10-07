import React from 'react';
import axios from 'axios';

// Class-Type Component : Component 클래스를 반드시 상속받아야 한다.
class App extends React.Component {

  // render(); 가 호출된 후에 실행된다.
  componentDidMount() {
    this.getMovies();
  }

  state = {
    isLoading: true,    // true ? 로딩중 : 로딩완료
    movies: [],         // 영화 데이터 목록
  };

  // 데이터를 읽어오는데 시간이 소요되므로 비동기로 처리한다.
  getMovies = async () => {
    // es5
    //const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    //console.log(movies.data.data.movies);
    // es6
    const {
      data: {
        data: {
          movies
        },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
    this.setState({movies: movies, isLoading: false});    // key=state, value=data
  };

  render() {
    const { isLoading } = this.state;   // this.state.isLoading을 풀어쓰지 않기 위해 구조분해할당 방식 사용
    return (
      <div>
        {isLoading ? 'Loading...' : 'Loading is completed.'}
      </div>
    );
  }
}

export default App;
