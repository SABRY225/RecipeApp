import { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(value);
    setValue("");
  };

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Lets explore the {""}
          <span style={{ color: "orange", fontStyle: "italic" }}>recipes</span>
        </h2>

        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="tomato,potato,pizza"
            action={{ icon: "search", color: "yellow" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
