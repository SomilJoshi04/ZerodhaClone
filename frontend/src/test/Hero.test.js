import React from "react";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";

// Test Suite
describe('Hero Component',()=>{
    test("render hero image",()=>{
   render(<Hero/>);  // first render Hero section
   const heroImage = screen.getByAltText("Hero Img");  // then check Herosection have image on screen and that image have alt Hero Img
   expect(heroImage).toBeInTheDocument(); // then  check image is available on Document means image should be visible on output screen
   expect(heroImage).toHaveAttribute('src','media/images/homeHero.png') // then check image have src = media/images/homeHero.png
    });

    test("renders signup button",()=>{
   render(<Hero/>);  // first render Hero section
   const signupButton = screen.getByRole("button",{name: /signup now/i});  
   expect(signupButton).toBeInTheDocument();  
   expect(signupButton).toHaveClass("btn-primary") ;
    });
})
