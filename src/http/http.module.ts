import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { DatabaseModule } from '../database/database.module';
import { ApolloDriver } from '@nestjs/apollo';
import { StudentsResolver } from 'src/graphql/resolvers/students.resolver';
import { EnrollmentsResolver } from 'src/graphql/resolvers/enrollments.resolver';
import { CoursesResolver } from 'src/graphql/resolvers/course.resolver';
import { CoursesService } from 'src/services/courses.service';
import { StudentsService } from 'src/services/students.service';
import { EnrollmentsService } from 'src/services/enrollments.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    StudentsResolver,
    EnrollmentsResolver,
    CoursesResolver,

    CoursesService,
    StudentsService,
    EnrollmentsService,
  ],
})
export class HttpModule {}
