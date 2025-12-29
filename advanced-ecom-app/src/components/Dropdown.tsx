import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Category {
  label: string;
  value: string;
}

interface DropdownProps {
  categories?: Category[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get<string[]>(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data.map((c) => ({ label: c, value: c }));
};

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  onSelect,
  placeholder,
}) => {
  const [selected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: fetchedCategories,
    isLoading,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    enabled: !categories,
  });

  const items = categories ?? fetchedCategories ?? [];

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading && items.length === 0}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          background: "#fff",
          textAlign: "left",
        }}
      >
        {isLoading && items.length === 0 ? (
          <>
            <Spinner animation="border" size="sm" style={{ marginRight: 8 }} />{" "}
            Loading...
          </>
        ) : (
          selected || placeholder || "Select an option"
        )}
      </button>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #ccc",
            background: "#fff",
            listStyle: "none",
            margin: 0,
            padding: 0,
            zIndex: 10,
          }}
        >
          {items.map((cat) => (
            <li
              key={cat.value}
              onClick={() => handleSelect(cat.value)}
              style={{
                padding: "8px",
                cursor: "pointer",
                background: selected === cat.value ? "#f0f0f0" : "#fff",
              }}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
