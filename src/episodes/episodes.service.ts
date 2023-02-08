import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  create(createEpisodeDto: CreateEpisodeDto) {
    return this.prisma.episode.create({ data: createEpisodeDto });
  }

  findAll() {
    return this.prisma.episode.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} episode`;
  }

  update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    return this.prisma.episode.update({
      where: { id },
      data: updateEpisodeDto,
    });
  }

  remove(id: number) {
    return this.prisma.episode.delete({ where: { id } });
  }
}
