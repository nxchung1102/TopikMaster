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
  const checkedIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
</svg>`;

  let content;

  switch (`${typeSection}-${typeData}`) {
    case '1-0':
      content = ListenStandardQuestion(stand, [], sectionStattus, checkedIcon);
      break;
    case '1-1':
      content = ListenMaterialQuestion(
        material,
        [],
        sectionStattus,
        checkedIcon,
      );
      break;
    case '2-0':
      content = ReadStandardQuestion(stand, [], sectionStattus, checkedIcon);
      break;
    case '2-1':
      content = ReadMaterialQuestion(material, [], sectionStattus, checkedIcon);
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
