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

  // Set JWT as cookie with sameSite attribute set to 'lax'
  res.cookie('jwt', token, {
    httpOnly: false,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'none', // Set sameSite attribute to 'lax'
    maxAge: 1000 * 60 * 60 * 24 * 10, // 10 days
  });
};

export default generateToken;
