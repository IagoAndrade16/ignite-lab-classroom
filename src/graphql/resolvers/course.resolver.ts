import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/auth/authorization.guard';
import { CoursesService } from 'src/services/courses.service';
import { CreateCourseInput } from '../inputs/create-course-input';
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

  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data);
  }
}
