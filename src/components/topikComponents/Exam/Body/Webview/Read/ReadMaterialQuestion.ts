import {
  dataMaterialType,
  listAnswerType,
} from '../../../../../../util/GlobalType';

export const ReadMaterialQuestion = (
  material: dataMaterialType,
  lstQuestion?: listAnswerType,
  sectionStattus?: number,
  checkedIcon?: string,
) => {
  return ` <div>${material?.contentHtml}</div>
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
          }
            ${rdo.isAnswer && rdo.userSelected ? `checked` : ``}        
          />
                <div></div>
              </div>
              <label for="${rdo.content}"> ${rdo.content} </label>
                    ${rdo.isAnswer ? checkedIcon : ``}
            </div>
            `;
              })
              .join('')}
          </div>
            ${
              sectionStattus === 2
                ? ` <div style="padding: 20px; background-color: #F1F4FC; margin: 10px; border-radius: 5px; color: #324357;">
          <h3 style="color: #5685ff;"> Giải thích </h3>
          ${item.explain}</div>`
                : ``
            }
        </div>
        `;
          })
          .join('')}
      </div>`;
};
