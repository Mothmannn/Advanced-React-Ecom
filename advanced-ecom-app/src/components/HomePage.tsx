import Products from "./Products";
import { useState } from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";


const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    return (
      <Container>
        <NavBar onCategorySelect={setSelectedCategory}/>
        <Products filterCategory={selectedCategory}/>
      </Container>
    );
}

export default HomePage;