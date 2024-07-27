import { HttpService } from '@nestjs/axios';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  private readonly logger = new Logger('RecaptchaGuard');
  constructor(private readonly httpService: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { body } = context.switchToHttp().getRequest();

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://www.google.com/recaptcha/api/siteverify?response=${body.recaptchaValue}&secret=${process.env.RECAPTCHA_SECRET}`,
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    if (!data.success) {
      throw new ForbiddenException();
    }

    return true;
  }
}
