import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);
  
  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  
  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  // Arrange
  render(<App />);
  
  // Act
  const imageElement = screen.getByAltText(/your name/i);
  
  // Assert
  expect(imageElement).toBeInTheDocument();
});

test("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);
  
  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  
  // Assert
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  // Arrange
  render(<App />);
  
  // Act
  const bioParagraph = screen.getByText(/your biography/i);
  
  // Assert
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to your GitHub page", () => {
  // Arrange
  render(<App />);
  
  // Act
  const githubLink = screen.getByRole("link", {
    name: /github/i,
    exact: false,
  });
  
  // Assert
  expect(githubLink).toBeInTheDocument();
});

test("displays a link to your LinkedIn page", () => {
  // Arrange
  render(<App />);
  
  // Act
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
    exact: false,
  });
  
  // Assert
  expect(linkedinLink).toBeInTheDocument();
});
