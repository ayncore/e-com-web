import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./large-navbar"; // Adjust the import according to your file structure

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props:any) => <img {...props} />, // Mock next/image to return a regular img tag
}));

jest.mock("react-icons/hi", () => ({
  __esModule: true,
  HiOutlineShoppingCart: () => <svg data-testid="shopping-cart-icon" />,
}));

describe("Navbar Component", () => {
  it("renders the logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("AYNcore");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("ayncorelogo.png"));
  });

  it("renders the shopping cart icon", () => {
    render(<Navbar />);
    const cartIcon = screen.getByTestId("shopping-cart-icon");
    expect(cartIcon).toBeInTheDocument();
  });

  it("renders login button when user is not logged in", () => {
    render(<Navbar currentuser={false} />); // Pass currentuser prop as false
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  it("renders user icon when user is logged in", () => {
    render(<Navbar currentuser={true} />); // Pass currentuser prop as true
    const userIcon = screen.getByAltText("Profile"); // The alt text is "Profile" as per your updated code
    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveAttribute("src", expect.stringContaining("ayncoreicon.png"));
  });
});
