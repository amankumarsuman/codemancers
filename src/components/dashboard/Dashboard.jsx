import React from "react";
import ScrollableTabsButtonForce from "../scrollbarComponent/ScrollBarComponent";
import { Grid,  Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { PostComponent } from "../postComponent/PostComponent";
import { TagComponent } from "../tagComponent/TagComponent";
import { Textfield } from "../textField/Textfield";
function Dashboard({ data }) {
  return ( 
    <>
      <Grid container spacing={2}>
        <Grid style={{ display: "flex" }} item xs={3}>
          <EditIcon />
          <Typography>Compose Post</Typography>
        </Grid>
        <Grid style={{ display: "flex" }} item xs={3}>
          <PhotoLibraryIcon />
          <Typography>Photo/Video Album</Typography>
        </Grid>
        <Grid item xs={6}>
          <VideoCallIcon />
          <Typography>Live Video</Typography>
        </Grid>

        <Grid item xs={12}>
          <Textfield />
          <img src={data} alt="data"/>
        </Grid>
      </Grid>

      <ScrollableTabsButtonForce />
      <PostComponent />
      <TagComponent />
    </>
  );
}

export { Dashboard };
