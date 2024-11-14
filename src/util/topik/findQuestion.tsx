import {DoingExamType} from '../GlobalType';

export const findQuestion = (
  data: DoingExamType | null,
  idxPart: number,
  idxQuestion: number,
) => {
  let question = data?.data.parts[idxPart].questions[idxQuestion];
  if (question) {
    const currentQ = question.indexEnd;
    return currentQ;
  } else {
    const currentQ = 0;
    return currentQ;
  }
};
