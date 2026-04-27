import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";


test("Should render RestaurantCard component with props data",() => {
    
    render(<RestaurantCard resData={MOCK_DATA}/>);
    
    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();


});



