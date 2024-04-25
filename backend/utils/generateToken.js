import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10d',
    },
  );

  // Log the generated token
  console.log('Generated Token:', token);

  return token; // Return the token
};

export default generateToken;
