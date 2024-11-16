import {dataStandardType} from '../../../../../../util/GlobalType';
import {GetDataTitleWriting} from '../../../../../../util/topik/GetDataTitleWriting';

export const WriteStandardQuestion = (
  standard: dataStandardType,
  sectionStattus?: number,
) => {
  const {QuestionTitle} = GetDataTitleWriting(standard);
  return `
  <div style="display: flex; flex-direction: row; padding-top: 10px;justify-content: space-between; align-items: center;">
         <div style="display: flex; flex-direction: row; ">
          <div style="font-weight: bold;">
            ${QuestionTitle}
          </div>
          <div style="font-weight: bold; color: #BFC3CB;"> # ${
            standard?.numberQuestion
          }</div>
          </div>
           <div style="display: flex; flex-direction: row; align-items: center;">
          <div>
          <i class="fas fa-exclamation-triangle" style="font-size:12px; color: #BFC3CB; "></i>
          </div>
          <div style="color: #BFC3CB; font-weight:500;"> Báo lỗi</div>
          </div>
         </div>
      <div>${standard?.question}</div>
      ${
        standard?.indexStart === standard?.indexEnd
          ? `<textarea 
          id="writingArea" 
          rows="10" cols="50" 
          placeholder="Viết câu trả lời tối thiểu 70 ký tự, tối đa 800 ký tự."></textarea>
        ${
          sectionStattus !== 2
            ? ` <div>Số ký tự:  <span id="lengthCharacter" style="color: red;">0</span>
       <div id="textLimit" style="color: #BFC3CB;"></div>
       </div>`
            : ``
        }
          `
          : ``
      }
        ${
          sectionStattus === 2
            ? ` <div style="padding: 20px; background-color: #F1F4FC; margin: 10px; border-radius: 5px; color: #324357;">
          <h3 style="color: #5685ff;"> Giải thích </h3>
          ${standard?.explain}</div>`
            : ``
        }
  `;
};
