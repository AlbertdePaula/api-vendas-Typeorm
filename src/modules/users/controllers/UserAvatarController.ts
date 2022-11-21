import { Request, Response } from 'express';
import UpadateUserAvatarService from '../services/UpdateUserAvatarService ';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpadateUserAvatarService();

    const user = updateAvatar.execute({
      user_id: request.user.id,
      //@ts-ignore
      avatarFileName: request.file.filename,
    });

    return response.json(user);
  }
}

//To commit
