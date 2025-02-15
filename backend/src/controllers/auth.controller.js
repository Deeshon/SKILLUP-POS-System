import bcrypt from "bcrypt";
import supabase from "../config/db.js";
const users = [];

// POST register
export const register = async (req, res) => {
  try {

    // check if a user with email already exists
    const {data: checkUser} = await supabase.from('users').select('email').eq('email', req.body.email).single();

    if (checkUser?.email) {
        return res.status(500).json({
            success: false,
            result: {
                response: 'Internal Server Error',
                message: 'A user with the provided email already exists.',
            }
        })
    }

    // hash password
    const hashedPwd = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
      role: 'admin'
    };

    // insert user to the database
    const {data, error, status} = await supabase.from('users').insert(user);

    if (error) {
        return res.status(status).json({
            success: false,
            result: {
                response: 'Internal Server Error',
                message: error.message
            }
        })
    }

    res.json({
      success: true,
      response: 'User registered successfully',
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error",
        message: err.message,
      },
    });

  }
};
