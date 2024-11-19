import {CheckedIcon, FailedIcon} from '../../../../../../../util/Svg/SvgGlobal';
import {ListenMaterialQuestion} from '../../../../Body/Webview/Listen/ListenMaterialQuestion';
import {ListenStandardQuestion} from '../../../../Body/Webview/Listen/ListenStandardQuestion';
import {ReadMaterialQuestion} from '../../../../Body/Webview/Read/ReadMaterialQuestion';
import {ReadStandardQuestion} from '../../../../Body/Webview/Read/ReadStandardQuestion';
import {ResultWriteScript} from '../../../../Body/Webview/Write/ResultWriteScript';
import {WriteStandardQuestion} from '../../../../Body/Webview/Write/WriteStandardQuestion';
import {TemplateResult} from './TemplateResult';

export const RenderResultData = (
  typeSection: number,
  data: any,
  idxP: number,
  idxQ: number,
) => {
  const typeData = data.data[idxP]?.data[idxQ]?.typeData;
  const stand = data.data[idxP]?.data[idxQ]?.dataStandard;
  const material = data.data[idxP]?.data[idxQ]?.dataMaterial;
  const sectionStattus = data.status;

  let content;

  switch (`${typeSection}-${typeData}`) {
    case '1-0':
      content = ListenStandardQuestion(
        stand,
        [],
        sectionStattus,
        CheckedIcon,
        FailedIcon,
      );
      break;
    case '1-1':
      content = ListenMaterialQuestion(
        material,
        [],
        sectionStattus,
        CheckedIcon,
        FailedIcon,
      );
      break;
    case '2-0':
      content = ReadStandardQuestion(
        stand,
        [],
        sectionStattus,
        CheckedIcon,
        FailedIcon,
      );
      break;
    case '2-1':
      content = ReadMaterialQuestion(
        material,
        [],
        sectionStattus,
        CheckedIcon,
        FailedIcon,
      );
      break;
    case '3-0':
      content = WriteStandardQuestion(stand, sectionStattus);
      break;
    default:
      content = '';
      break;
  }

  return TemplateResult(content ? content : '', ResultWriteScript(stand));
};
