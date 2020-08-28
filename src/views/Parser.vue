<template>
  <div id="divParserPage">
    <div id="divUpload">
      <p>Upload JSON file to be parsed into HTML.</p>
      <input type="file" id="inputJsonFile" v-on:change="JsonLoaded" />
    </div>
    <div id="divParsedForm"></div>
    <div id="divParsedHtmlOutput">
      <v-container fluid>
        <v-textarea
        name="input-7-1"
        filled
        label="HTML Code:"
        auto-grow
        v-model="textAreaValue"
        value="Your HTML code will be given here..."
      ></v-textarea>
    </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      textAreaValue: ""
    }
  },
  methods: {
    JsonLoaded: function(event) {
      console.log("json file is uploaded...");
      var reader = new FileReader();
      reader.onload = this.onReaderLoad;
      console.log("reading json file...");
      reader.readAsText(event.target.files[0]);
    },
    onReaderLoad: function(event) {
      var jsonObject = JSON.parse(event.target.result);
      console.log("reading completed!");
      console.log(jsonObject);
      this.ConvertJsonToHTML(jsonObject);
    },
    ConvertJsonToHTML: function(jsonObject) {
      this.$el.querySelector("#divParsedForm").style.width =
        jsonObject.width + "px";
      this.$el.querySelector("#divParsedForm").style.height =
        jsonObject.height + "px";
      this.$el.querySelector("#divParsedForm").style.border = "2px black solid";

      console.log("Conversion started...");
      Object.keys(jsonObject).forEach(key => {
        var val = jsonObject[key];
        switch (val.type) {
          case "label":
            console.log("this entity is a label!");
            this.GenerateLabel(key, val);
            break;
          case "textbox":
            console.log("this entity is a textbox!");
            this.GenerateTextbox(key, val);
            break;
          case "button":
            console.log("this entity is a button!");
            this.GenerateButton(key, val);
            break;
        }
      });
    },
    GenerateLabel: function(key, val) {
      console.log("Generating label...");
      var buttonElement = document.createElement("label");
      buttonElement.setAttribute("type", "label");
      buttonElement.setAttribute("id", key);

      buttonElement.style.position = "absolute";
      buttonElement.style.left = val.boundingBoxMinX + "px";
      buttonElement.style.bottom = val.boundingBoxMinY + "px";

      var width = val.boundingBoxMaxX - val.boundingBoxMinX;
      var height = val.boundingBoxMaxY - val.boundingBoxMinY;

      buttonElement.style.width = width + "px";
      buttonElement.style.height = height + "px";

      var buttonText = document.createTextNode(val.text);
      buttonElement.appendChild(buttonText);
      this.$el.querySelector("#divParsedForm").appendChild(buttonElement);
      console.log("Label generated!");
    },
    GenerateTextbox: function(key, val) {
      console.log("Generating textbox...");
      var textboxElement = document.createElement("input");
      textboxElement.setAttribute("type", "text");
      textboxElement.setAttribute("id", key);

      textboxElement.style.position = "absolute";
      textboxElement.style.left = val.boundingBoxMinX + "px";
      textboxElement.style.bottom = val.boundingBoxMinY + "px";
      textboxElement.style.border = "1px solid black";

      var width = val.boundingBoxMaxX - val.boundingBoxMinX;
      var height = val.boundingBoxMaxY - val.boundingBoxMinY;

      textboxElement.style.width = width + "px";
      textboxElement.style.height = height + "px";

      this.$el.querySelector("#divParsedForm").appendChild(textboxElement);
      console.log("Textbox generated!");
    },
    GenerateButton: function(key, val) {
      console.log("Generating button...");
      var buttonElement = document.createElement("button");
      buttonElement.setAttribute("type", "button");
      buttonElement.setAttribute("id", key);

      buttonElement.style.position = "absolute";
      buttonElement.style.left = val.boundingBoxMinX + "px";
      buttonElement.style.bottom = val.boundingBoxMinY + "px";

      var width = val.boundingBoxMaxX - val.boundingBoxMinX;
      var height = val.boundingBoxMaxY - val.boundingBoxMinY;

      buttonElement.style.width = width + "px";
      buttonElement.style.height = height + "px";
      buttonElement.style.border = "1px solid black";

      var buttonText = document.createTextNode(val.text);
      buttonElement.appendChild(buttonText);
      this.$el.querySelector("#divParsedForm").appendChild(buttonElement);
      console.log("Button generated!");
    }
  },
  mounted: function () {
    console.log(this);
    this.textAreaValue = "HTML bıdı bıdı";
  }
};
</script>

<style scoped>
#divUpload {
  flex-grow: 1;
  padding: 10px;
}

#divParsedForm {
  background-color: rgb(234, 234, 231);
  flex-grow: 1;
  position: relative;
}
</style>
