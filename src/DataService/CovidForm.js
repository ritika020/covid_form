import axios from "axios";

export const sendCovidForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/covidForm", data,{
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};



// sirname : String,
//     firstName : String,
//     middleName : String,
//     contactNo : {
//         type : String
//     },
//     address : {
//         type : String
//     },
//     state: {
//         type: String
//     },
//     district : {
//         type : String
//     },
//     cityOrVillages : {
//         type : String
//     },
//     images : [{
//         type : String
//     }]


//https://nimaaaa-project.herokuapp.com/covidForm