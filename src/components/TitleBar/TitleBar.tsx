// TitleBar.tsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import TabPanel from "../TabPanel";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Home } from "@mui/icons-material";
import About from "../About/About";
import Services from "../Services/Services";

interface TitleBarProps {
  onTabChange: (tabIndex: number) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

const TitleBar: React.FC<TitleBarProps> = ({ onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    onTabChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <IconButton
              aria-label="email"
              color="inherit"
              onClick={() => window.open("mailto:example@example.com")}
              sx={{ color: "#2196f3" }}
            >
              <EmailIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ display: "inline-block" }}>
              example@example.com
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="phone"
              color="inherit"
              onClick={() => window.open("tel:+1234567890")}
              sx={{ color: "#2196f3" }}
            >
              <LocalPhoneIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ display: "inline-block" }}>
              +1234567890
            </Typography>
          </Grid>
        </Grid>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ConnectWave
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px" }}
          >
            Book Appointment
          </Button>
          <IconButton
            color="inherit"
            aria-label="twitter"
            sx={{ color: "#2196f3" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="twitter"
            sx={{ color: "#2196f3" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="linkedin"
            sx={{ color: "#2196f3" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="instagram"
            sx={{ color: "#2196f3" }}
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
        <Box display="flex" justifyContent="flex-end">
          <Tabs
            // value={0}
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Home" />
            <Tab label="Services" />
            <Tab label="About" />
            <Tab label="Content" />
            <Tab label="Blog" />
            <Tab label="Login" />
          </Tabs>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default TitleBar;
