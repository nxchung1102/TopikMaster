import {
  dataMaterialType,
  listAnswerType,
} from '../../../../../../util/GlobalType';

export const ListenMaterialQuestion = (
  material: dataMaterialType,
  lstQuestion: listAnswerType,
) => {
  return `<div><audio id="audioListen" controls src=${material?.urlMedia}
             onended="handleEnded()"/></div>
        ${material?.data
          .map(item => {
            return `
        <div>
<div style="display: flex; flex-direction: row; padding-top: 10px;justify-content: space-between; align-items: center;">
         <div style="display: flex; flex-direction: row; ">
          <div style="font-weight: bold;">
          Câu ${item.index + 1}
          </div>
          <div style="font-weight: bold; color: #BFC3CB;"> #${
            item.numberQuestion
          }</div>
          </div>
           <div style="display: flex; flex-direction: row; align-items: center;">
          <div>
          <i class="fas fa-exclamation-triangle" style="font-size:12px; color: #BFC3CB; "></i>
          </div>
          <div style="color: #BFC3CB; font-weight:500;"> Báo lỗi</div>
          </div>
         </div>
          <div>${item.question}</div>
          <div>
            ${item.options
              .map((rdo, i) => {
                return `
            <div style="display: flex">
              <div>
                <input
                  type="radio"
                  name="${item.numberQuestion}"
                  id="${rdo.content}"
                  value="${i}"
                    onchange="selectedAnswer(${i},
          '${item.stepId}'
          )" 
          ${
            lstQuestion && lstQuestion[item.index]?.answer === i
              ? `checked`
              : ``
          }/>
                <div></div>
              </div>
              <label for="${rdo.content}"> ${rdo.content} </label>
            </div>
            `;
              })
              .join('')}
          </div>
        </div>
        `;
          })
          .join('')}
      </div>`;
};
