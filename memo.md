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

### state
동적 데이터를 다룰 때 사용 (동적 데이터: 변경될 가능성이 있는 데이터)
ex. 객체의 구성요소 중 일부가 추가/삭제됨

### App_ch4.js
Ch4까지 사용했던 App.js 잠시 백업