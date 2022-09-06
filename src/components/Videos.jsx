import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((data, id) => (
        <Box key={id}>
          {data.id.videoId && <VideoCard video={data} />}
          {data.id.channelId && <ChannelCard channelDetail={data} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
