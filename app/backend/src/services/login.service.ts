import User from '../database/models/User';
// import HttpException from '../utils/HttpException';

const serviceLogin = async (email:string) => {
  const user = await User.findOne({
    where: { email },
    raw: true,
  });

  return user;
};

export default serviceLogin;
