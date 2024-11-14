import {
  dataStandardType,
  listAnswerType,
} from '../../../../../../util/GlobalType';
import {GetDataTitleWriting} from '../../../../../../util/topik/GetDataTitleWriting';

export const WriteScript = (
  standard: dataStandardType,
  lstQuestion: listAnswerType,
) => {
  const {ListPlaceholder} = GetDataTitleWriting(standard);
  let data = lstQuestion.find(
    item => item.indexTitle === standard?.indexTitle,
  )?.answerInput;

  return `
  <script>
  
  const elements = document.querySelectorAll('input,textarea');

   const unfocusInput = ()=>{
       elements.forEach((element,i)=>{
       element.blur()
       })
   }

  document.addEventListener("message", (event) => {
  if (event.data === 'unfocusInput') {
    unfocusInput(); 
   }
  });

    const renderPlaceholder = ()=>{
    const inputs = document.querySelectorAll('input');
    ${ListPlaceholder.map((item, i) => {
      return `inputs[${i}].placeholder = ${item}`;
    })}
    }
    renderPlaceholder()
  
    const handleBlur = () =>{
      const lstAnswer = []
      lstAnswer.push("")
        elements.forEach((element,i)=>{
        element.onblur = (e) =>{
          const value = e.target.value;
          if(lstAnswer.length>0){
          lstAnswer[i] = value
          }else{
          lstAnswer.push(value)
          }
        const data = { answer:lstAnswer, stepId:'${standard?.stepId}'};
              window.ReactNativeWebView.postMessage(JSON.stringify(data));
        }
  })
    }
    handleBlur();

    const renderValue = ()=>{
      ${data?.map((item, i) => {
        return `elements[${i}].value='${item}'`;
      })}
    }
    renderValue()



    </script>
    `;
};
