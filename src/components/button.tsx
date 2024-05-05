// src/components/Button.tsx
import React from "react";
import Button from "@mui/material/Button";

type Props = {
  label: string;
};

const MyButton: React.FC<Props> = ({ label }) => (
  <Button variant="contained">{label}</Button>
);

export default MyButton;
