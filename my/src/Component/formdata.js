import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
//import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const [person, setPerson]= useState({
    name : "",
    city : "",
    programminglanguage : "",
    favouriteMovie  : "",
    favuriteSinger : ""
  }) 
 //const nav = useNavigate();

  return (
  <div>
    <div>Lütfen Bilgilerinizi Giriniz</div>
   <Form
   onSubmit={(event) => {
    event.preventDefault();
    axios
      .post(
        "https://6451148ae1f6f1bb22a76d28.mockapi.io/api/v1/forms",
        person
      )
      .then((res) => {
        console.log("Yeni product kayıt res > ", res);
      });
    }}
    >
        
        <FormGroup>
        <Label htmlFor="person-name">Name</Label>
        <Input
            id="person-name"
            name="name"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, name: event.target.value });
            }}
            value={person.name}
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="person-city">City</Label>
        <Input
            id="person-city"
            name="city"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, city: event.target.value });
            }}
            value={person.city}
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="person-programminglanguage">Programming Language</Label>
        <Input
            id="person-programminglanguage"
            name="programminglanguage"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, programminglanguage: event.target.value });
            }}
            value={person.programminglanguage}
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="person-favouriteMovie">Favourite Movie</Label>
        <Input
            id="person-favouriteMovie"
            name="favouriteMovie"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, favouriteMovie: event.target.value });
            }}
            value={person.favouriteMovie}
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="person-favuriteSinger">Favourite Singer</Label>
        <Input
            id="person-favuriteSinger"
            name="favuriteSinger"
            type="text"
            onChange={(event) => {
              setPerson({ ...person, favuriteSinger: event.target.value });
            }}
            value={person.favuriteSinger}
          />
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form> 
    </div>
  );

} 

export default CreateProducts;