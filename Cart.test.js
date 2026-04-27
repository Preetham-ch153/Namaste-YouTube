import { render,screen,fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock";
import {act} from "react";
import "@testing-library/jest-dom";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";


global.fetch=jest.fn(()=> {
    return Promise.resolve({
        json:() =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
test("Should load RestaurantMenu component",async () => {
    await act(async ()=> render(
    <Provider store={appStore}>
    <RestaurantMenu />
    </Provider>));
    
    const accordianHeading = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeading);

    const menuItems= screen.getAllByTestId("foodItems");

    expect(menuItems.length).toBe(20);

});

test("Should load RestaurantMenu component",async () => {
    await act(async ()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    <RestaurantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>));
    
    const accordianHeading = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeading);

    const menuItems= screen.getAllByTestId("foodItems");

    const addbtns=screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addbtns[0]);
    fireEvent.click(addbtns[2]);

    const cartbtn = screen.getByText("Cart - (2 items)");
    expect(cartbtn).toBeInTheDocument();
    fireEvent.click(cartbtn);

    const cartItems = screen.getAllByTestId("foodItems");

    expect(cartItems.length).toBe(22);

    const clearbtn = screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearbtn);
    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(20);

});

