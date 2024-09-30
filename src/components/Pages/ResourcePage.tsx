import { Card, CardMedia, CardContent, Typography, Grid2, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { content } from "../../data/content";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-10">
      <Typography variant="h4" component="h1" className="text-center mb-10">
        Resources
      </Typography>
      <Grid2 container spacing={4}>
        {content.resourcesData.map((resource, index) => (
          <Grid2 key={index}>
            <Item>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardMedia
                  component="img"
                  alt={resource.name}
                  height="150"
                  image={resource.imageUrl}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {resource.name}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};
