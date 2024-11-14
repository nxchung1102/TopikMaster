import {DoingExamType} from '../GlobalType';

export const getIdxByQuestion = (currQ: number, data: DoingExamType | null) => {
  let parts = data?.data.parts;
  const part = parts?.find(
    item => currQ >= item.indexStart && currQ <= item.indexEnd,
  );
  const question = part?.questions.find(
    item => currQ >= item.indexStart && currQ <= item.indexEnd,
  );
  if (part && question) {
    const questionNumber = parseInt(part?.questions.indexOf(question) + '');
    const partNumber = parseInt(part?.partNumber + '') - 1;
    return {questionNumber, partNumber};
  } else {
    const questionNumber = 0;
    const partNumber = 0;
    return {questionNumber, partNumber};
  }
};
