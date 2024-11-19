import {dataStandardType} from '../../../../../../../util/GlobalType';

export const explainRender = (standard: dataStandardType) => {
  if (
    standard?.contentWritingGPT &&
    Object.keys(standard?.contentWritingGPT).length > 0
  ) {
    return `
       <div
        id="btnExplainGroup"
        style="display: flex; flex-direction: row; flex-wrap: wrap">
        <button class="btnExplain">Điểm tổng quan</button>
        <button class="btnExplain">Từ vựng và ngữ pháp</button>
        <button class="btnExplain">Đáp ứng đề bài</button>
        <button class="btnExplain">Bài văn mẫu</button>
      </div>
      <div class="hide">${standard.contentWritingGPT.SCORE}
       <div>
        <span>Lưu ý:</span> Đây là kết quả đánh giá của Trí tuệ nhân tạo (AI), chỉ
        sử dụng mang tính tham khảo.
      </div>
      </div>
      <div class="hide">${standard.contentWritingGPT.VOCA_GRAMMAR}
       <div>
        <span>Lưu ý:</span> Đây là kết quả đánh giá của Trí tuệ nhân tạo (AI), chỉ
        sử dụng mang tính tham khảo.
      </div>
      </div>
      <div class="hide">${standard.contentWritingGPT.FULFILMENT}
       <div>
        <span>Lưu ý:</span> Đây là kết quả đánh giá của Trí tuệ nhân tạo (AI), chỉ
        sử dụng mang tính tham khảo.
      </div>
      </div>
      <div class="hide">${standard.explain}</div>
      `;
  } else {
    return `<div style="padding: 20px; background-color: #F1F4FC; margin: 10px; border-radius: 5px; color: #324357;">
            <h3 style="color: #5685ff;"> Giải thích </h3>
            ${standard?.explain}</div>`;
  }
};
