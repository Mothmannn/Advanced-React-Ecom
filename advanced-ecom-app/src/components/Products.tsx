import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  inCart: boolean;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Products = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  console.log(data);

  if (isLoading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: "15px" }}
            role="status"
          />
          Loading Products...
        </h3>
      </Container>
    );
  }

  if (error) return <p>Error loading posts</p>;

  return (
    <Container>
      <h1 className="text-center mt-5" style={{ fontFamily: "Arial" }}>
        Products
      </h1>
      <p className="text-center">Choose from a variety of stylish products</p>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
        {data?.map((product) => (
          <Col key={product.id} className="d-flex align-items-stretch">
            <Card className="d-flex flex-column">
              <Card.Body className="d-flex flex-column flex-grow-1 shadow">
                <Card.Title className="text-center">{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  {product.category}
                </Card.Subtitle>
                <div
                  style={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Text className="mt-3 font-weight-bold p-2">
                  Price: ${product.price}
                </Card.Text>

                <Button
                  href={`/ProductDetails/${product.id}`}
                  variant="primary"
                  className="mt-auto d-block mx-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
