import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should check login button rendered in header component",() => {
    render(
        <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    );
    const loginButton = screen.getByRole("button",{name : "Login"});
    
    expect(loginButton).toBeInTheDocument();


});

test("Should check cart-(0 items) rendered in header component",() => {
    render(
        <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    );
    const cart = screen.getByText("Cart - (0 items)");
    
    expect(cart).toBeInTheDocument();


});

test("Should check cart rendered in header component",() => {
    render(
        <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    );
    const cart = screen.getByText(/Cart/);
    
    expect(cart).toBeInTheDocument();


});

test("Should check login button changed into logout button after clicking in header component",() => {
    render(
        <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        </Provider>
    );
    const loginButton = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name: "Logout"});
    expect(logoutButton).toBeInTheDocument();


});