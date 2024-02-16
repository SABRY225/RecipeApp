import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header content={`Recipe Lists for "${searchedQuery}"`} />
      <div className="ui grid">
        {recipes &&
          recipes.map((recipe) => (
            <div
              style={{
                height: "450px",
                width: "300px",
              }}
              className="four wide column"
              key={recipe.id} // Add a unique key when mapping elements
            >
              <RecipeListItem style={{ height: "450px" }} recipe={recipe} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default RecipeList;
