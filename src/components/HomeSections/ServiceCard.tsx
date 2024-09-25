import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="w-80 m-4 shadow-lg">
      <CardContent>
        <Typography variant="h5" className="font-bold">
          {title}
        </Typography>
        <Typography variant="body2" className="mt-2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
