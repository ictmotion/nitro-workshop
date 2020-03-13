import { Controller, Get, Param, NotFoundException, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Story } from './story.entity';

// Some cat facts, courtesy of https://catfact.ninja
const funFacts = [
  "Cats have supersonic hearing",
  "On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.",
  "A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.",
  "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
  "A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.","Jaguars are the only big cats that don't roar.",
  "Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles",
  "The cat's tail is used to maintain balance.",
  "The technical term for a cat’s hairball is a 'bezoar.'",
  "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.",
  "A happy cat holds her tail high and steady.",
  "A cat can jump 5 times as high as it is tall."
];

@Controller('stories')
export class StoriesController {
  constructor(
    @InjectRepository(Story)
    private readonly storiesRepository: MongoRepository<Story>,
  ) {}

  @Get('random')
  getRandomStory(): string {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }

  @Get(':id')
  async getStory(@Param('id') id): Promise<Story> {
    const story = ObjectID.isValid(id) && await this.storiesRepository.findOne(id);
    if (!story) {
      // Entity not found
      throw new NotFoundException();
    }
    return story;
  }

  @Get()
  async getStories(): Promise<Story[]> {
    return await this.storiesRepository.find();
  }

  @Post()
  async createStory(@Body() data: Partial<Story>): Promise<Story> {
    const story = new Story(data);
    if (!story.createdAt) {
      story.createdAt = new Date();
    }
    return await this.storiesRepository.save(story);
  }
}
