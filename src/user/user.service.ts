import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.services';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: {
          ...createUserDto,
        },
        select: {
          email: true,
          createdAt: true,
          id: true,
        },
      });
    } catch (exception) {
      throw new Error(exception);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (exception) {
      throw new Error(exception);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    } catch (exception) {
      throw new Error(exception);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        data: {
          ...UpdateUserDto,
        },
        where: {
          id: id,
        },
      });
    } catch (exception) {
      throw new Error(exception);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({
        where: {
          id: id,
        },
      });
    } catch (exception) {
      throw new Error(exception);
    }
  }
}
