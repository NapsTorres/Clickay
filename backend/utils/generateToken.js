import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10d',
    },
  );

  // Set JWT as HttpOnly cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 10, // 10 days
  });

  // Log the generated token
  console.log('Generated Token:', token);

  return token; // Return the token if needed
};

export default generateToken;
