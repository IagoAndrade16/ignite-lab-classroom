import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/auth/authorization.guard';
import { CoursesService } from 'src/services/courses.service';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';

@Resolver(() => Enrollment)
export class CoursesResolver {
  constructor(private coursesService: CoursesService) {}

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses() {
    return this.coursesService.listAllCourses();
  }
}
