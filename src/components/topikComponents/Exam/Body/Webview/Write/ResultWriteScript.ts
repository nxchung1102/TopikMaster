import {dataStandardType} from '../../../../../../util/GlobalType';

export const ResultWriteScript = (standard: dataStandardType) => {
  const explain = `<div style="padding: 20px; background-color: #F1F4FC; margin: 10px; border-radius: 5px; color: #324357;">
          <h3 style="color: #5685ff;"> Giải thích </h3>
          ${standard?.explain}</div>`;

  return `
  <script>
  const elements = document.querySelectorAll('input,textarea');
  const renderValue = ()=>{
   ${
     standard?.userOptionText &&
     standard?.userOptionText.map((item, i) => {
       return `elements[${i}].value = '${item}'`;
     })
   }
  }
   renderValue()


  </script>`;
};
