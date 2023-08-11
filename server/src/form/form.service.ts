import { Injectable } from '@nestjs/common';

import { UpdateFormDto } from './dto/update-form.dto';
import { EntityManager } from 'typeorm';
import { FormData } from './entities/form.entity';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class FormService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  findOne(id: number) {
    const query = `select * from FormData where id = ${id}`;

    return this.entityManager.query(query);
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    const form: FormData = new FormData();
    console.log(updateFormDto);
    form.id = id;
    form.input1 = updateFormDto.input1;
    form.input2 = updateFormDto.input2;
    form.input3 = updateFormDto.input3;
    form.input4 = updateFormDto.input4;
    form.role1 = updateFormDto.role1;
    form.jobtype1 = updateFormDto.jobtype1;
    form.role2 = updateFormDto.role2;
    form.jobtype2 = updateFormDto.jobtype2;
    const query = `update FormData set input1 = '${form.input1}', input2 = '${form.input2}', input3 = '${form.input3}', input4 = '${form.input4}', role1 = '${form.role1}', role2 = '${form.role2}', jobtype1 = '${form.jobtype1}',jobtype2 = '${form.jobtype2}' where id = ${id}`;
    return this.entityManager.query(query);
  }
}
