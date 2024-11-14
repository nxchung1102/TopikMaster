export const ReadScript = () => {
  return `
    <script>
      const selectedAnswer = (index,stepId) => {
        const data = { answer: index,stepId};
              window.ReactNativeWebView.postMessage(JSON.stringify(data));
    };
    </script>
    `;
};
