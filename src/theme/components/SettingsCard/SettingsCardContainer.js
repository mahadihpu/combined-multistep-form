import Grid from "@mui/material/Grid";
import * as React from "react";
import AddSettingCard from "./AddSettingCard";
import SettingCardHeader from "./SettingCardHeader";
import SettingsCard1 from "./SettingsCard1";

//import "./project_folder.css";
// const useStyles = makeStyles({
//   gridItem: {},
//   icon: {
//     fontSize: "30px !important",
//   },
// });

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function SettingsCardContainer() {
  //   const classes = useStyles();
  return (
    <div>
      <SettingCardHeader />

      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          md={4}
          sx={{ margin: "auto", justifyContent: "center" }}
        >
          <AddSettingCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}>
          <SettingsCard1 />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}>
          <SettingsCard1 />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}>
          <SettingsCard1 />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}>
          <SettingsCard1 />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} md={4}>
          <SettingsCard1 />
        </Grid>
      </Grid>
    </div>
  );
}
