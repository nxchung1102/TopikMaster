export const getResultAnswerUser = (data: any) => {
  const result = data?.data.map((p: any) => {
    return p.data.map((q: any) => {
      if (q.typeData === 0) {
        return q?.dataStandard.options.map((item: any) =>
          item.userSelected === true
            ? {
                answer: item.idOption,
                numberQuestion: q.dataStandard?.numberQuestion,
              }
            : null,
        );
      } else {
        return q.dataMaterial.data.map((mtrl: any) =>
          mtrl.options.map((item: any) =>
            item.userSelected === true
              ? {
                  answer: item.idOption,
                  numberQuestion: mtrl.numberQuestion,
                }
              : null,
          ),
        );
      }
    });
  });

  const getInnermostValues = (array: any[]) => {
    let result: any[] = [];
    array?.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(getInnermostValues(item));
      } else if (item !== null) {
        result.push(item);
      }
    });
    return result;
  };
  console.log(getInnermostValues(result));

  return getInnermostValues(result);
};
