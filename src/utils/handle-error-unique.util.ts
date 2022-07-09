import { UnprocessableEntityException } from '@nestjs/common';

export const handleErrorConstraintUnique = (error: Error): never => {
  const splitedMessage = error.message.split('`');

  const errorMessage = `Entry '${
    splitedMessage[splitedMessage.length - 2]
  }' not respecting the unique constraint`;

  throw new UnprocessableEntityException(errorMessage);
};
