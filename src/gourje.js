import React from 'react';
// import ReactDOM from 'react-dom';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

// function head1 (){
//     return(
//         <div>
//             <h1>hello</h1>;
//         </div>
//     );
// }

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
      <div>
      <h1>hello</h1>
      </div>
    </>

  );
}

export default Garage;
