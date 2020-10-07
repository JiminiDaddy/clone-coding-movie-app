/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

//import Movie from './Movie';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
];

// 
function Food({ name, picture, rating } ) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

/* es5 
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
*/
/* es6 */
//const renderFood = (dish) => { return <Food name={dish.name} picture={dish.image} /> };


// 자식 Component로 props를 전달할때, 문자열을 제외한 다른 타입은 중괄호로 감싸야 한다.
// 리스트의 각 원소는 유일한 값을 의미하는 "key" prop을 가져야한다. 만약 "key"가 없는 props라면 다음과 같은 경고가 발생한다. 
// => Warning: Each child in a list should have a unique "key" prop. .......

function App() {
  return (
    <div>
      {foodILike.map(dish => {
        return (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />);
      })}
    </div>
   /* map의 원소로 함수를 사용하는 예제
   <div>
     {foodILike.map(renderFood)}
   </div>
   */
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
