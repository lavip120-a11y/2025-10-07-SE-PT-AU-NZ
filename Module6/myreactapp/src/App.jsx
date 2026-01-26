import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FirstComponent from './FirstComponent.jsx';
import {SecondComponent, SubSecondComponent } from './SecondComponent.jsx'; //when exporting using export function(without default) you need to use the curly braces here to import
import Student from './Student.jsx';
import Welcome from './MyComponents/Welcome.jsx';
import City from './MyComponents/city.jsx'; 
import Pet from './MyComponents/Pets.jsx';
import Greeting from './MyComponents/Greeting.jsx'; //importing the Greeting component - exercise 1
import Books from './MyComponents/Books.jsx';
import FullName from './MyComponents/FullName.jsx';
import ComplexComment from './MyComponents/ComplexComment.jsx';
import Callout from './MyComponents/Callout.jsx';
import MoviesList from './MyComponents/MoviesList.jsx';
import BigCats from './MyComponents/BigCats.jsx';
import Counter from './MyComponents/Counter.jsx';
import MoodChanger from './MyComponents/MoodChanger.jsx';
import Emoji from './MyComponents/Emoji.jsx';
import BirthdayTranslator from './MyComponents/BirthdayTranslator.jsx';
import Weather from './MyComponents/Weather.jsx';
import LoginForm from './LoginForm.jsx';
import SampleUncontrolledForm from './MyComponents/SampleUnctrolledForm.jsx';
import ExplodingBomb from './MyComponents/ExplodingBomb.jsx';
import Calculator from './MyComponents/Calculator.jsx';

// the function name should be capitalized for react to recognize it as a component and is javascript standard
function App() {

const studentLocation = (
  <div>
    <p>Student location: Sydney</p>
  </div>
);
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!", 
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/64/64",
    },
  };

  return (
  <>
  <h1>Module 6 Exercises</h1>
  <Calculator></Calculator> 
  <BigCats></BigCats> 
 {/* <SampleUncontrolledForm></SampleUncontrolledForm>
   <ExplodingBomb></ExplodingBomb>  
  <LoginForm></LoginForm>
  <Weather></Weather>
  <BirthdayTranslator></BirthdayTranslator>*/}
  <Emoji></Emoji>
 {/* <MoodChanger></MoodChanger>
   <Counter></Counter> 
  <MoviesList></MoviesList>*/}

{/* render the Callout component with FullName as children*/}
  {/* <Callout 
  title="Nested React Component"
  message="Simple message with a fancy box applied via composition">
  <FullName firstName="Elon" lastName="Musk" />
  </Callout> 

<ComplexComment 
text={comment.text} 
author={comment.author} 
date={comment.date}>
</ComplexComment>

<Books></Books>

<FullName firstName="Jane" lastName="Smith"></FullName>
<div>Welcome to the country</div> */}
{/* passing as a child */}
{/*<FullName firstName="John" lastName="Smith"></FullName>
<FullName firstName="Peter" lastName="Smith"></FullName>*/}
{/* using the Greeting component and passing a prop called name with value Mary */}

<Greeting name="Mary"> 
<p>Welcome to our class</p> 
</Greeting> 
  {/* child element passed to the Greeting component */}
    
{/*<Pet type='cat' color='black' name='Fluffy'></Pet>

<City name="Melbourne"></City>

  <Welcome></Welcome>
    <FirstComponent></FirstComponent> 
    <SecondComponent></SecondComponent>
    <SubSecondComponent></SubSecondComponent>
    <Student firstName="John" lastName="Doe">
    {studentLocation}
    </Student> */}
    {/* passing firstName and lastName as attributes to the Student component using props OR as a child*/}
    {/* passing a jsx element as a child to the Student component */}
 </>
  );
}

export default App;

// The App component is the parent of all the components.  Every Component that is created should be under the App component.
// import the component then inject it into the return statement of the App component
    