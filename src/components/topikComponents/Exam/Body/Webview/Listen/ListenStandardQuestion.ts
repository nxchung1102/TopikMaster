import {
  dataStandardType,
  listAnswerType,
} from '../../../../../../util/GlobalType';

export const ListenStandardQuestion = (
  standard: dataStandardType,
  lstQuestion: listAnswerType,
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
        <div style="display: flex">
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
          />
            <div></div>
          </div>
          <label for="${i}"> ${rdo.content} </label>
        </div>
        `;
          })
          .join('')}
      </div>
  `;
};
