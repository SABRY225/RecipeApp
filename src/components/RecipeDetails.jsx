import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from "semantic-ui-react";
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";
import Footer from "./common/Footer";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <Button
          as={Link}
          to={"/recipes"}
          content="Back to recipe List"
          color="yellow"
          style={{ marginBottom: 40 }}
        />
        <Image src={recipe.image_url} style={{width:"550px",height:"376px",boxShadow:"10px 10px 18px #000"}} />
      </Grid.Column>
      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided By: {recipe.publisher}</p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="blue"
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => (
              <Segment>
                <h5>{data}</h5>
              </Segment>
            ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default RecipeDetails;
