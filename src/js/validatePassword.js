// console.log("hello, world!");
// console.log("parcel project test");
import Joi from "joi";
console.log(Joi);

const passSchema = Joi.string().min(3).max(10);
export default validatePassword = (password) => {
  return passSchema.validate(password);
};

// export default 555;
