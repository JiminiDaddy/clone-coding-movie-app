# Memo

### 기본 구조
화면에 출력할 HTML은 index.html으로 되어있고
index.html에는 <div id="root"> 라는 TAG가 추가되어있다.
index.js에서 아래와 같이 id="root" 엘리먼트를 찾고, 해당 엘리먼트 내에 개발자가 구현한 Custom-Component를 그리게 된다.
```javascript
// index.js
ReactDOM.render(
  // App Component를
  <App />,
  // ID="root"인 엘리먼트에 그리겠다. 
  document.getElementById('root')
);
```
App.js는 Custom-Component로, 이 외에도 화면에 그릴 Component를 계속 추가할 수 있다.


### map
배열을 통해 length개의 컴포넌트를 생성할 때 배열의 원소를 컴포넌트의 인자로 전달하기 위해 사용
```javascript
${Array}.map(item -> { ... });
```

### for props validator 
npm install prop-types

### props 후 warning
Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
    - rating의 type이 number인데 string으로 정의되서 발생한 문제

### App_ch4.js
Ch4까지 사용했던 App.js 잠시 백업


### state
동적 데이터를 다룰 때 사용 (동적 데이터: 변경될 가능성이 있는 데이터)
ex. 객체의 구성요소 중 일부가 추가/삭제됨

state가 변경되면 react내부에서 자동으로 render(); 를 호출하여 화면을 갱신한다. 단, state객체에 직접 접근하여 수정하면 render(); 가 호출되지 않는다.
state는 setState(); 메서드를 호출하여 접근한다.

### Class-Component LifeCycle
1. constructor();
2. render();
3. componentDidMount();
4. componentDidUpdate();
5. componentWillUnMount();

### axios
npm install axios

### NomadCoder Movie-API
https://yts-proxy.now.sh/list_movies.json

### router
npm install react-router-dom 
router props
1. path
2. component
router는 '/' 기준으로 탐색하면서 화면을 그리므로 /a/b/c/d와 같은 url이 있는경우 a, b, c, d 각 컴포넌트들을 순서대로 화면에 그리게된다.
최종 컴포넌트 d만 그리고 싶다면 <Route>에 exact={true} props를 전달한다.

<a>는 링크를 누를 때마다 화면을 새로고침하므로, Virtual-Dom의 장점을 살리지 못한다. (변하는 부분만 갱신해야되는데 DOM을 새로 그려버리므로)
따라서 리액트는 react-router-dom의 <Link> 컴포넌트를 사용한다.

### route-props
라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props
(개발자가 설정하지 않아도 기본으로 전달되는 props로 Customizing 가능하다.)

### Redirect
잘못된 페이지 접근시 특정 경로로 보낼 수 있어야 한다.
route-props의 history 참조