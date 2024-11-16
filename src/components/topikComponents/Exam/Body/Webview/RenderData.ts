import {DoingExamType, listAnswerType} from '../../../../../util/GlobalType';
import {ListenMaterialQuestion} from './Listen/ListenMaterialQuestion';
import {ListenScript} from './Listen/ListenScript';
import {ListenStandardQuestion} from './Listen/ListenStandardQuestion';
import {ReadMaterialQuestion} from './Read/ReadMaterialQuestion';
import {ReadScript} from './Read/ReadScript';
import {ReadStandardQuestion} from './Read/ReadStandardQuestion';
import {Template} from './Template';
import {WriteScript} from './Write/WriteScript';
import {WriteStandardQuestion} from './Write/WriteStandardQuestion';

export const RenderData = (
  examData: any | DoingExamType | null,
  idxPart: number,
  idxQuestion: number,
  lstQuestion: listAnswerType,
  audioTime: number,
) => {
  let standard =
    examData?.data?.parts[idxPart]?.questions[idxQuestion]?.dataStandard;
  let material =
    examData?.data?.parts[idxPart]?.questions[idxQuestion]?.dataMaterial;
  let question = examData?.data?.parts[idxPart]?.questions[idxQuestion];
  let part = examData?.data?.parts[idxPart];
  let typeSection = parseInt(examData?.data?.typeSection + '');
  let typeData = parseInt(question?.typeData + '');
  let content;
  switch (`${typeSection}-${typeData}`) {
    case '1-0':
      content = ListenStandardQuestion(standard, lstQuestion);
      break;
    case '1-1':
      content = ListenMaterialQuestion(material, lstQuestion);
      break;
    case '2-0':
      content = ReadStandardQuestion(standard, lstQuestion);
      break;
    case '2-1':
      content = ReadMaterialQuestion(material, lstQuestion);
      break;
    case '3-0':
      content = WriteStandardQuestion(standard);
      break;
    default:
      content = `<div></div>`;
  }
  const script =
    typeSection === 1
      ? ListenScript(audioTime)
      : typeSection === 2
      ? ReadScript()
      : typeSection === 3
      ? WriteScript(standard, lstQuestion)
      : '';
  return Template(content, script);
};
