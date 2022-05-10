import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { API } from "../../services/api";

export const CategoryForm = ({
  categoryField,
  handleOpen,
  listCategories,
}: {
  categoryField?: string;
  handleOpen: Function;
  listCategories: Function;
}) => {
  const [category, setCategory] = useState<string>(categoryField || "");
  //const { id, handleDeleteId } = useId();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }

  async function handleSave(e: SyntheticEvent) {
    e.preventDefault();

    try {
      //  await API.updateCategory(id, { name: category });

      // clean up
      setCategory("");
      // remove query string from url
      // handleDeleteId();
      handleOpen();
      await listCategories();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleAdd(e: SyntheticEvent) {
    e.preventDefault();

    try {
      const result = await API.addCategory({ name: category });
      setCategory("");
      handleOpen();
      await listCategories();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box
      component="form"
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      <TextField
        id="category"
        label="Categoría"
        variant="standard"
        value={category}
        onChange={handleChange}
      />
      <Box>
        {categoryField != null ? (
          <Button variant="outlined" onClick={handleSave}>
            Guardar
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleAdd}>
            Añadir
          </Button>
        )}
      </Box>
    </Box>
  );
};