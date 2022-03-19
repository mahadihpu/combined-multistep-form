import { Dashboard, ViewModule } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import message from "./message_icon.png";
import "./SettingsCard.css";

const SettingsCard2 = () => {
  const lists = [
    {
      name: "module",
      items: "module 1, module 2, module 3",
      icon: <Dashboard className="icons" />,
    },
    {
      name: "services",
      items: "services 1, services 2, services 3",
      icon: <ViewModule className="icons" />,
    },
    {
      name: "Connections",
      items: "Connections 1, Connections 2, Connections 3",
      icon: <SettingsEthernetIcon className="icons" />,
    },
  ];
  return (
    <Card variant="outlined" className="settings-card">
      <Grid container>
        <Grid xs={2}>
          <img src={message} className="message-icon" alt="" />
        </Grid>
        <Grid xs={9}>
          <Box className="items">
            <Typography color="text.secondary" className="module-number">
              12 Modules
            </Typography>
            <Typography color="text.secondary">5 Services</Typography>
          </Box>
          <Typography variant="h2">User settings</Typography>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex e
          </Typography>
        </Grid>
        <Grid xs={1}>
          <MoreVertIcon className="more-icon" />
        </Grid>
      </Grid>
      <br />
      <Switch defaultChecked />
      <Box className="card-footer-container">
        <Box variant="outlined" className="card-footer">
          <List style={{ marginLeft: -14 }}>
            {lists.map((list, index) => (
              <ListItem>
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    list.name + ":  " + list.items
                  } /*secondary={list.items} */
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Card>
  );
};

export default SettingsCard2;
