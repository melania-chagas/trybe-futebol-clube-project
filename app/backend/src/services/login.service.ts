import User from '../database/models/User';

const serviceLogin = async (email:string) => {
  const user = await User.findOne({
    where: { email },
    raw: true,
  });

  return user;
};

const serviceGetUserType = async (id: unknown) => {
  const user = await User.findOne(
    { where: { id },
      raw: true,
    },
  );
  if (user) {
    return user.role;
  }
};

export {
  serviceLogin,
  serviceGetUserType,
};
