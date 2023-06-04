import user from "../model/user-schema.js";

export const addUsers = async (req, res) => {
  // console.log(req.body)
  const userBody = req.body;
  const validateUser = new user(userBody);
  try {
    await validateUser.save();
    res.status(201).json(validateUser);
  } catch (error) {
    console.log("error while calling addUser controller");
    res.status(409).json({ messege: error.messege });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error while calling getAllUsers");
    res.status(404).json({ messege: error.messege });
  }
};
export const deleteUsers = async (req, res) => {
  try {
    await user.deleteOne({ _id: req.params.id });
    res.status(200).json({ meg: "deleted successfully !" });
  } catch (error) {
    console.log("error while calling deleteUsers");
    res.status(409).json({ meg: error.meg });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const singleuser = await user.find({_id: req.params.id})
    res.status(200).json(singleuser)
  } catch (error) {
    console.log("error while calling getSingleUser");
    res.status(404).json({meg :error.meg})
  }
};

export const updateUser =async (req,res)=>{

  const usr =req.body
  const validateUser = new user(usr)
try {
  await user.updateOne({_id:req.params.id},validateUser)
  res.status(200).json({meg:"updated Successfully !"})
} catch (error) {
  console.log("error while calling updateUser")
  res.status(404).json({meg:"update failed"})
}
}
