export const Template = (data: string, script?: string) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Document</title>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous">
<style>
    * {
      margin: 0;
      padding: 0;
      padding-left: 2px;
      padding-right: 2px;
      border: 0;
      font-size: 100%;
    }
     audio::-webkit-media-controls-panel {
     background-color: #FF5F7A;
     }

     audio {
    pointer-events: none; 
    width: 100%; 
    padding: 10px 0px;
    }
     img {
      width: 100%;
    }
   input {
      border-width: 1px;
      border-style: solid; 
      text-align: center;
    }
       textarea {
      border-width: 1px;
      border-style: solid; 
      }
  </style>
   </head>
<body oncopy="return false" oncut="return false" onpaste="return false">
  ${data}
</body>
${script}
</html>
    `;
};
