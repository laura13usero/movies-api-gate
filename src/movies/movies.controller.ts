import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from './dto/create-movie.dto';

@ApiTags('movies')
@Controller('api/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  @ApiOkResponse({ type: MovieDto, isArray: true })
  async getMovies(): Promise<Movie[]> {
    return this.moviesService.listMovies();
  }

  async getMovies(): Promise<any> {
    return [{ name: 'Error intencionado' }];
  }

  @Get()
  getMovies() {
    return { movies: [] };
  }

}
