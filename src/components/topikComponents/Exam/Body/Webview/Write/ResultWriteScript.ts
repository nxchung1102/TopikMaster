import {dataStandardType} from '../../../../../../util/GlobalType';

export const ResultWriteScript = (standard: dataStandardType) => {
  return `
  <script>

  const elements = document.querySelectorAll('input,textarea');
  const renderValue = ()=>{
   ${
     standard?.userOptionText &&
     standard?.userOptionText.map((item, i) => {
       return `elements[${i}].value = '${item}'
       elements[${i}].setAttribute('disabled', 'true');`;
     })
   }
  }
   renderValue()

    const explainRender = () => {
      const buttons = document.querySelectorAll('.btnExplain');
      const contents = document.querySelectorAll('.hide');
      buttons[0].classList.add('active');
      contents[0].classList.add('show');
      contents[0].classList.remove('hide');
      buttons.forEach((button, i) => {
        button.onclick = () => {
          contents.forEach(content => content.classList.add('hide'));
          contents[i].classList.remove('hide');
          contents[i].classList.add('show');
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        };
      });
    };
    explainRender();

  </script>`;
};
