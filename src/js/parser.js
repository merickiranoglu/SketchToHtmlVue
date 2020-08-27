module.exports = function() {
  divParsedForm.style.width = jsonObject.width + "px";
  divParsedForm.style.height = jsonObject.height + "px";

  divParsedForm.style.border = "2px black solid";

  console.log("Conversion started...");
  Object.keys(jsonObject).forEach(key => {
    var val = jsonObject[key];
    switch (val.type) {
      case "label":
        console.log("this entity is a label!");
        GenerateLabel(key, val);
        break;
      case "textbox":
        console.log("this entity is a textbox!");
        GenerateTextbox(key, val);
        break;
      case "button":
        console.log("this entity is a button!");
        GenerateButton(key, val);
        break;
    }
  });
};
