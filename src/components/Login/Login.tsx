import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import TitleBar from "../TitleBar/TitleBar";

const Login: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Left Section (Sign Up) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "top",
          alignItems: "center",
          flexDirection: "column",
          padding: 3,
          backgroundColor: "#2196f3",
          color: "#fff",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
          backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.5), rgba(33, 150, 243, 0.5)), url('https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h4" gutterBottom>
          NEW HERE ?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Create an account to access all features.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="inherit"
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          Sign Up
        </Button>
      </Box>

      {/* Right Section (Login) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 3,
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Login
        </Typography>
        <Box sx={{ width: "100%", mt: 3 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: 20 } }} // Rounded corners for the input
          />
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            InputProps={{ sx: { borderRadius: 20 } }} // Rounded corners for the input
          />
        </Box>
        <Box sx={{ width: "100%", mt: 2, textAlign: "right" }}>
          <Link href="#" color="primary">
            Forgot Password?
          </Link>
        </Box>
        <Box sx={{ width: "100%", mt: 3 }}>
          <Button variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </Box>
        <Box sx={{ width: "100%", mt: 3 }}>
          <Typography variant="body2" gutterBottom>
            Or sign in with
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<Google />}
                sx={{ borderRadius: "50%", width: 40, height: 40 }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<Facebook />}
                sx={{ borderRadius: "50%", width: 40, height: 40 }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<Twitter />}
                sx={{ borderRadius: "50%", width: 40, height: 40 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
