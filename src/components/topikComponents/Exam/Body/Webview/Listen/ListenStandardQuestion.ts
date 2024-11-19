import {
  dataStandardType,
  listAnswerType,
} from '../../../../../../util/GlobalType';

export const ListenStandardQuestion = (
  standard: dataStandardType,
  lstQuestion?: listAnswerType,
  sectionStattus?: number,
  checkedIcon?: string,
  failedIcon?: string,
) => {
  return `
   <div style="display: flex; flex-direction: row; padding-top: 10px;justify-content: space-between; align-items: center;">
         <div style="display: flex; flex-direction: row; ">
          <div style="font-weight: bold;">
          Câu ${standard !== undefined && standard.index + 1}
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
             <div><audio id="audioListen" controls src=${
               standard?.questionUrlSpeech
             } 
            onended="handleEnded()"/></div>
      <div>${standard?.question}</div>
      <div>
        ${standard?.options
          .map((rdo, i) => {
            return `
        <div style="display: flex;">
          <div>
            <input
              type="radio"
              value="${i}"
              name="${standard?.numberQuestion}"
              id="${i}"
              onchange="selectedAnswer(${i},
          '${standard?.stepId}'
          )" 
          ${
            lstQuestion && lstQuestion[standard.index]?.answer === i
              ? `checked`
              : ``
          }
              ${rdo.userSelected ? `checked` : ``}
               ${sectionStattus === 2 ? `disabled` : ``}
          />
            <div></div>
          </div>
          <label for="${i}"> ${rdo.content} </label>
          ${rdo.isAnswer ? checkedIcon : ``}
          ${
            rdo.userSelected !== rdo.isAnswer && !rdo.isAnswer ? failedIcon : ``
          }
        </div>
        `;
          })
          .join('')}
         ${
           sectionStattus === 2
             ? ` <div style="padding: 20px; background-color: #F1F4FC; margin: 10px; border-radius: 5px; color: #324357;">
          <h3 style="color: #5685ff;"> Giải thích </h3>
          ${standard?.explain}</div>`
             : ``
         }
      </div>
  `;
};
