import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationBar from "./../NavigationBar";

describe("verify navigation bar render properly", () => {
  it("verify text in the navigation bar", () => {
    render(<NavigationBar />);
    expect(screen.getByText("Vehicles")).toBeInTheDocument();
    expect(screen.getByText("Taxi")).toBeInTheDocument();
    expect(screen.getByText("Create Vehicle")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Calculate Trip Charges")).toBeInTheDocument();
    expect(screen.getByText("Create Category")).toBeInTheDocument();
  });
});
