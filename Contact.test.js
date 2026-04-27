import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",() =>{
    test("Should load Contact us component",()=>{
    render(<Contact />);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});
test("Check that Button is there in Contact us component",()=>{
    render(<Contact />);

    const button=screen.getByText("Submit");

    expect(button).toBeInTheDocument();

});
test("Check that Button by role in Contact us component",()=>{
    render(<Contact />);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();

});
test("Check that input is there in Contact us component",()=>{
    render(<Contact />);

    const inputBox=screen.getByPlaceholderText("name")

    expect(inputBox).toBeInTheDocument();

});
test("Check that 2input boxes is there in Contact us component",()=>{
    render(<Contact />);

    const inputBoxes=screen.getAllByRole("textbox");
    // console.log(inputBoxes[1]);

    expect(inputBoxes.length).not.toBe(3);

}); 
})
