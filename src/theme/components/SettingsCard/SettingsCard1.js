// import { Dashboard, ViewModule } from "@mui/icons-material";
// import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
// import {
//   Card,
//   CardContent,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import { Box } from "@mui/system";
// import React from "react";
// import "./CardStyle.css";
// import IosSwitch from "./IosSwitch";
// import logo from "./message_icon.png";
// import "./SettingsCard.css";

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

// const lists = [
//   {
//     name: "module",
//     items: "module 1, module 2, module 3",
//     icon: <Dashboard />,
//   },
//   {
//     name: "services",
//     items: "services 1, services 2, services 3",
//     icon: <ViewModule />,
//   },
//   {
//     name: "Connections",
//     items: "Connections 1, Connections 2, Connections 3",
//     icon: <SettingsEthernetIcon />,
//   },
// ];

// const SettingsCard1 = () => {
//   return (
//     <Card
//       sx={{
//         boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//         "&:hover": {
//           boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
//         },
//       }}
//       variant="outlined"
//     >
//       <CardContent>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h5" gutterBottom>
//             User settings
//           </Typography>
//           <img src={logo} alt="logo" />
//         </Box>
//         <br />
//         <Typography color="text.secondary">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </Typography>
//         <br />
//         <Box sx={{ position: "relative" }}>
//           <Grid container>
//             <Grid xs={11}>
//               <List style={{ marginLeft: -14 }}>
//                 {lists.map((list, index) => (
//                   <ListItem>
//                     <ListItemIcon>{list.icon}</ListItemIcon>
//                     <ListItemText primary={list.name + ":  " + list.items} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//             <Grid xs={1}>
//               <IosSwitch />
//             </Grid>
//           </Grid>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default SettingsCard1;

import { Dashboard } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CardStyle.css";
import IosSwitch from "./IosSwitch";

const lists = [
  {
    name: "module",
    items: "module 1, module 2, module 3",
    icon: <Dashboard />,
  },
];

const SettingsCard1 = () => {
  return (
    <Card
      sx={{
        boxShadow: "0 8px 30px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
        },
      }}
      variant="outlined"
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            User settings
          </Typography>
          <SettingsIcon sx={{ fontSize: "37px" }} />
        </Box>
        <br />
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur Lorem
        </Typography>

        <Grid container>
          <Grid item xs={10}>
            <List sx={{ marginLeft: "-14px" }}>
              {lists.map((list, index) => (
                <ListItem>
                  <ListItemIcon>{list.icon}</ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <ListItemText primary={list.name + ":  " + list.items} />
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={2} sx={{ margin: "auto" }}>
            <IosSwitch />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default SettingsCard1;
