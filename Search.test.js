import { render,screen,fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);

            },
        
    });
});

test("Should test The flow of search feature",async () => {
    await act(async ()=> render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);
    
});

test("Should render Body component with search Button",async () => {
    await act(async ()=> render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));

    const Searchbtn = screen.getByRole("button",{name:"Search"});

    expect(Searchbtn).toBeInTheDocument();

});

test("Should render Body component with search input",async () => {
    await act(async ()=> render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));

    const search = screen.getByTestId("searchInput");

    expect(search).toBeInTheDocument();

    fireEvent.change(search,{target:{value:"h"}});

    const searchbtn=screen.getByRole("button",{name:"Search"});
    fireEvent.click(searchbtn);

    const cardsAfterSearch=screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(4);

});

test("Should render Body Component By Clicking Top Rated Restaurant Button",async () => {
    await act(async ()=> render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>));

    const filterbtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(filterbtn);

    const resCardsAfterFilter = screen.getAllByTestId("resCard");

    expect(resCardsAfterFilter.length).toBe(7);
})