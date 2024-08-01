import { UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { User } from '@prisma/client';
import { Server, Socket } from 'socket.io';
import { CommentsService } from './comments.service';
import { RecaptchaGuard } from './recaptcha.guard';
import { WsGuard } from './websocket.guard';

export interface CustomSocket extends Socket {
  user: User;
}

@WebSocketGateway({
  cors: {
    origin: `*`,
    methods: ['GET', 'POST'],
  },
})
export class CommentsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private commentsService: CommentsService) {}

  @WebSocketServer() server: Server;

  @UseGuards(WsGuard)
  @UseGuards(RecaptchaGuard)
  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @ConnectedSocket() client: CustomSocket,
    @MessageBody() payload: { text: string },
  ): Promise<void> {
    const { id, createdAt, text } = await this.commentsService.create({
      text: payload.text,
      authorId: client.user.id,
    });
    this.server.emit('recMessage', {
      id,
      createdAt,
      text,
      username: client.user.username,
    });
  }

  afterInit(server: Server) {
    console.log(server);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Connected ${client.id}`);
  }
}
