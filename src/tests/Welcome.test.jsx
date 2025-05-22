import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
  test("dovrebbe montarsi correttamente e mostrare il contenuto previsto", () => {
    render(<Welcome />);

    const heading = screen.getByRole("heading", { name: /welcome to epibooks/i });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/your one-stop shop for the best books online/i);
    expect(paragraph).toBeInTheDocument();
  });
});
