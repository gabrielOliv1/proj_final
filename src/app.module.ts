import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FollowersModule } from './followers/followers.module';
import { FollowingModule } from './following/following.module';
import { TweetsModule } from './tweets/tweets.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, FollowersModule, FollowingModule, TweetsModule, CategoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
