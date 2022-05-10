import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { useFilterItems } from "../../hooks";
import { useBusiness } from "../../hooks";
import { useLocations } from "../../hooks";
import { useCategory } from "../../hooks";
import { FilterItems } from "../../interface/models/enums";
import FlipCard from "../../components/FlipCard/FlipCard";

export const Dashboard = () => {
  const { locations } = useLocations();
  const { business } = useBusiness();
  const { filteredItems } = useFilterItems(FilterItems.STOCK);
  const {categories,listCategories} = useCategory();
  return (
    <Box>
      {/*---------------------BUSINESS---------------- */}
      {business !== null ? (
        <Typography variant="h3" sx={{ fontWeight: 200, mb: 5 }}>
          {`Welcome Back, ${business?.name}`}
        </Typography>
      ) : (
        <Skeleton
          sx={{ width: { xs: 450, sm: 550 }, height: 50 }}
          variant="rectangular"
        />
      )}
      {/* ----------------------LOCATIONS--------------------- */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 100 }}>
          Your Locations:
        </Typography>
        {locations != null ? (
          <Box mb={5} sx={{ pl: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
            {locations.map((location) => (
              <Paper
                elevation={1}
                key={location.id}
                sx={{ p: 1, width: "auto" }}
              >
                {`${location.street} - ${location.town} - ${location.zip}`}
              </Paper>
            ))}
          </Box>
        ) : (
          <Skeleton
            sx={{ width: { xs: 350, sm: 450 }, height: { xs: 200, sm: 300 } }}
            variant="rectangular"
          />
        )}
      </Box>
      {/* ----------------OUT-OF-STOCK-ITEMS---------------- */}
      <Box>
          {categories && <Typography variant="h4" sx={{ mb: 2, fontWeight: 100}}>
             Number of Categories: {categories.length}
          </Typography>}

        <Typography variant="h4" sx={{ mb: 1, fontWeight: 100 }}>
          Items to Restock On:
        </Typography>
        <Box sx={{ pl: 3, display: "flex", flexWrap: "wrap", gap: 2 }}>
          {filteredItems ? (
            filteredItems.map((item) => (
              <FlipCard
                key={item.id}
                name={item.name}
                itemCount={item.itemCount}
                picture={item.picture || ""}
                expire={item.expire}
                price={item.price}
                id={item.id}
                locationID={item.locationsID}
              />
            ))
          ) : (
            <Skeleton variant="rectangular" width={500} height={118} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
