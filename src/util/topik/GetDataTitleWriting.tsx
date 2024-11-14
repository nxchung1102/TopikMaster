import {dataStandardType} from '../GlobalType';

export const GetDataTitleWriting = (standard: dataStandardType) => {
  let QuestionTitle = 'Câu ';
  const ListPlaceholder = [];
  if (standard && standard.indexStart !== standard.indexEnd) {
    for (
      let index = standard.indexStart + 1;
      index <= standard.indexEnd + 1;
      index++
    ) {
      ListPlaceholder.push(index);
      QuestionTitle =
        QuestionTitle +
        `${index != standard.indexEnd + 1 ? index + '-' : index + ''}`;
    }
  } else {
    let titleNumber = parseInt(standard?.indexTitle + '') + 1;
    QuestionTitle = QuestionTitle + titleNumber;
  }
  return {
    QuestionTitle,
    ListPlaceholder,
  };
};
