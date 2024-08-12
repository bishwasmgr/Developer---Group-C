import React from "react";
import CreateCategoryForm from "../CreateCategoryForm";
import { render, fireEvent, getByText } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("verify create new category form", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole, getByText } = render(
        <CreateCategoryForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText("Category Name"), {
          target: { value: "long trip" },
        });
        fireEvent.change(getByLabelText("Amount"), {
          target: { value: "8000" },
        });
      });

      await act(async () => {
        fireEvent.click(getByText("Save"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
