import { NextFunction, Response } from "express";
import createHttpError from "http-errors";
import { envConfig } from "../../configs/variable";
import { IAuthRequest as IAdminRequest } from "../../interfaces";
import { authorizationRoles } from "../../enums";

export const isAdmin = async (req: IAdminRequest, res: Response, next: NextFunction) => {
  const user = req?.user;

  const adminEmails = envConfig?.ADMIN_EMAILS && (JSON.parse(envConfig.ADMIN_EMAILS) as string[]);
  const adminUser = user && user.role === authorizationRoles.admin && adminEmails?.includes(`${user?.email}`);

  if (!adminUser) {
    return next(createHttpError(403, `Auth Failed (Unauthorized)`));
  }

  next();
};

export default { isAdmin };
